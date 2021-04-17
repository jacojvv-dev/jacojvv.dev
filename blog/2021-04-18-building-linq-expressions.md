---
id: building-linq-expressions
title: Building LINQ expressions
author: Jaco Jansen van Vuuren
author_title: Software Developer
author_url: https://github.com/jacojvv-dev
author_image_url: https://avatars0.githubusercontent.com/u/14131955?v=4
tags: [c#, csharp, expressions, linq]
image: https://www.jacojvv.dev/img/covers/2021-04-18-building-linq-expressions.png
---

import useBaseUrl from '@docusaurus/useBaseUrl';

I ran into a scenario this week where I needed to build my own expression to query a database and thought that it could make for an interesting post - maybe we could all learn something about LINQ and expressions together.

<!--truncate-->

### Expressions?

Expressions are simple a way to strongly type lambda expressions - I find this easier to explain visually.

So looking at the following code sample, is there a way we can write the argument to `.Where` any differently?

```csharp
var numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 };
var numbersGreaterThanEight = numbers
    .Where(num => num > 8) // can this be achieved in a different way?
    .ToList();

var output = string.Join(", ", numbersGreaterThanEight);
Console.WriteLine(output); // 9, 10, 11, 12, 13, 14, 15
```

It turns out that you can - the code to do it is below. If you don't understand it all just yet - don't worry - I'll explain it afterwards.

```csharp
var parameter = Expression.Parameter(typeof(int), "num");
var eight = Expression.Constant(8);
var comparison = Expression.GreaterThan(parameter, eight);
var lambda = Expression.Lambda<Func<int, bool>>(comparison, parameter);

var numbersGreaterThanEightUsingExpression = numbers
    .Where(lambda.Compile())
    .ToList();

var outputFromExpression = string.Join(", ", numbersGreaterThanEightUsingExpression);
Console.WriteLine(outputFromExpression); // 9, 10, 11, 12, 13, 14, 15
```

Essentially the lambda argument is broken down into its essential pieces.

- `num` is captured with `Expression.Parameter`
- `8` is captured with `Expression.Constant`
- `>` is captured with `Expression.GreaterThan`
- and the entire lambda is captured with `Expression.Lambda`

Below is an color coded image with each part of the lambda color coded to a respective variable.

<img alt="Expression variable breakdown" style={{width:'100%'}} src={useBaseUrl('img/building-custom-linq-expressions/expression_variable_breakdown.png')} />

Another great way to have a visual look at what happens under the hood is by adding a breakpoint, inspecting the lambda variable and looking at the `DebugView` property, you'll see that it looks very similar to the actual lambda that we passed in to the `.Where` call originally.

```
.Lambda #Lambda1<System.Func`2[System.Int32,System.Boolean]>(System.Int32 $num) {
    $num > 8
}
```

### Ok. But why would I do all of this extra work?

It turns out that there are some things that aren't possible with LINQ. I explicitly required an `.OrWhere` function and just adding more `.Where` calls equates to adding AND statements. Furthermore - I needed to be able to do it dynamically - so I couldn't build the entire lambda upfront with `||`. Joseph Albahari mentions a similar problem on [his website](http://www.albahari.com/nutshell/predicatebuilder.aspx) (and also a different approach to solving it) which I recommend you read.

### The problem I needed to solve

Suppose you have a database with the following structure (I've omitted sales, because it is not needed to illustrate my concept) and you have a service that gives you the location where each product was sold the most - and you now needed to say what the price was of the product at each of those locations. How would you do it (without multiple database queries)?

<img alt="Database structure" style={{width:'100%'}} src={useBaseUrl('img/building-custom-linq-expressions/database_structure.png')} />

The service returns a list of `TopProductSalesLocation` of which you can see the definition below.

```csharp
public class TopProductSalesLocation
{
    public Guid ProductId { get; set; }
    public Guid LocationId { get; set; }
}
```

### Quick environment setup

This is how I set up the environment for the purpose of this post:

- 100 products
- 100 sellers with 100 locations each (10000 locations in total)
- A link between each product and each location (1000000 in total)

The following (very ugly) code was used to generate my fake data (be warned - it takes a while to run).

```csharp
var rand = new Random();
using (var context = new ApplicationDbContext())
{
    // create 100 products
    for (var i = 1; i < 101; i++)
        context.Products.Add(new Product()
        {
            Name = $"Product {i}"
        });
    context.SaveChanges();

    var allProductIds = context
        .Products
        .Select(p => p.Id)
        .ToList();

    // create 100 sellers, and 100 locations per seller
    // create a location product link for each product and each location
    for (int i = 1; i < 101; i++)
    {
        var seller = new Seller()
        {
            Name = $"Seller {i}",
            Locations = new List<Location>()
        };

        for (var j = 1; j < 101; j++)
        {
            var sellerLocation = new Location()
            {
                Name = $"Seller Location {j}",
                ProductLocations = allProductIds.Select(pid => new ProductLocation()
                {
                    ProductId = pid,
                    Price = Convert.ToDecimal(rand.NextDouble() * rand.Next(1, 100))
                }).ToList()
            };

            seller.Locations.Add(sellerLocation);
        }

        context.Sellers.Add(seller);
    }

    context.SaveChanges();

    Console.WriteLine($"Products {context.Products.Count()}"); // 100
    Console.WriteLine($"Sellers {context.Sellers.Count()}"); // 100
    Console.WriteLine($"Locations {context.Locations.Count()}"); // 10000
    Console.WriteLine($"ProductLocations {context.ProductLocations.Count()}"); // 1000000
}
```

### The first naive approach

Well - I'd just select all the `ProductLocations`'s that contain all the product ids and all the location ids. Let's try it.

```csharp
var topProductSalesLocations = topProductSalesLocationService
                                .GetTopProductSalesLocations();

using (var context = new ApplicationDbContext())
{
    var topSellingProductIds = topProductSalesLocations
        .Select(tpsl => tpsl.ProductId)
        .ToList();
    var topSellingLocationIds = topProductSalesLocations
        .Select(tpsl => tpsl.LocationId)
        .ToList();

    var productLocations = context
        .ProductLocations
        .Where(pl => topSellingProductIds.Contains(pl.ProductId) &&
                     topSellingLocationIds.Contains(pl.LocationId))
        .ToList();

    Console.Write(productLocations.Count); // 10000
}
```

There are two problems with this:

- You get a [cartesian product](https://en.wikipedia.org/wiki/Cartesian_product) of 100 \* 100 = 10 000 items as a worst case scenario. What happens if you had 200 products, or what about 1000 products?
- You will have to filter out the results in memory again to get back to the original 100 items that you actually wanted.

As you can imagine - this is not going to scale very well.

### Expressions to the rescue

Let's do this again - but using expressions and see what the difference is.

```csharp
var topProductSalesLocations = topProductSalesLocationService
            .GetTopProductSalesLocations();

var parameter = Expression.Parameter(typeof(ProductLocation), "pl");
Expression comparisonExpression = null;
foreach (var topProductSalesLocation in topProductSalesLocations)
{
    var productIdProperty = Expression
        .Property(parameter, nameof(ProductLocation.ProductId));
    var productIdConstant = Expression
        .Constant(topProductSalesLocation.ProductId);
    var productIdComparison = Expression
        .Equal(productIdProperty, productIdConstant);

    var locationIdProperty = Expression
        .Property(parameter, nameof(ProductLocation.LocationId));
    var locationIdConstant = Expression
        .Constant(topProductSalesLocation.LocationId);
    var locationIdComparison = Expression
        .Equal(locationIdProperty, locationIdConstant);

    var productIdAndLocationIdComparison = Expression
        .And(productIdComparison, locationIdComparison);

    if (comparisonExpression == null)
        comparisonExpression = productIdAndLocationIdComparison;
    else
        comparisonExpression = Expression
            .Or(comparisonExpression, productIdAndLocationIdComparison);
}

using (var context = new ApplicationDbContext())
{
    var lambda = Expression
        .Lambda<Func<ProductLocation, bool>>(comparisonExpression, parameter);

    var productLocations = context.ProductLocations
        .Where(lambda)
        .ToList();

    Console.Write(productLocations.Count); // 100
}
```

We only get the 100 records we wanted - instead of the 10000 that is a result of the cartesian product. Which is a lot easier to work with and will have a smaller footprint.
