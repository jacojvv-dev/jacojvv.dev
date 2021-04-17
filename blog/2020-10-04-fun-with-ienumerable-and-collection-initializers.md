---
id: fun-with-ienumerable-and-collection-initializers
title: Fun with IEnumerable and collection initializers
author: Jaco Jansen van Vuuren
author_title: Software Developer
author_url: https://github.com/jacojvv-dev
author_image_url: https://avatars0.githubusercontent.com/u/14131955?v=4
tags: [c#, csharp, ienumerable]
image: https://www.jacojvv.dev/img/covers/2020-10-04-fun-with-ienumerable-and-collection-initializers.png
---

IEnumerable and collection initializers. You probably use them every day (if you write C# code at least) without thinking about the implementation details too much. And honestly - neither did I. But after I got a null reference exception (by accident, of course) whilst doing an assignment to a collection I was reminded about some of the interesting parts of IEnumerable - and some of the fun stuff you can do with it.

<!--truncate-->

### Collection initializers?

Put very simply, collection initializers allow you to turn this:

```csharp
// No collection initializer
var values = new List<string>();
values.Add("value1");
values.Add("value2");
values.Add("value3");
```

Into this:

```csharp
// Using a collection initializer
var values = new List<string> {"value1", "value2", "value3"};
```

As you can see - the version using the collection initializer is a lot cleaner.

### A look under the hood

Let's take a look at the IL that is generated by the C# compiler for the following initializer by running it through dotPeek.

```cs
var values = new List<string> {"value1", "value2", "value3"};
```

The (shortened by me) IL is below - take a look too see if you can see what is happening.

```
IL_0001: newobj       instance void class [System.Collections]System.Collections.Generic.List`1<string>::.ctor()
IL_0007: ldstr        "value1"
IL_000c: callvirt     instance void class [System.Collections]System.Collections.Generic.List`1<string>::Add(!0/*string*/)
IL_0013: ldstr        "value2"
IL_0018: callvirt     instance void class [System.Collections]System.Collections.Generic.List`1<string>::Add(!0/*string*/)
IL_001f: ldstr        "value3"
IL_0024: callvirt     instance void class [System.Collections]System.Collections.Generic.List`1<string>::Add(!0/*string*/)
```

If you spotted what I wanted you to see you would have noticed that the C# compiler calls the ".Add" method for every string specified in the brackets. That means that the initializer is equivalent to mutliple calls to ".Add".

Below is the IL for the the same method - but using ".Add" instead of the collection initializer:

```
IL_0001: newobj       instance void class [System.Collections]System.Collections.Generic.List`1<string>::.ctor()
IL_0008: ldstr        "value1"
IL_000d: callvirt     instance void class [System.Collections]System.Collections.Generic.List`1<string>::Add(!0/*string*/)
IL_0014: ldstr        "value2"
IL_0019: callvirt     instance void class [System.Collections]System.Collections.Generic.List`1<string>::Add(!0/*string*/)
IL_0020: ldstr        "value3"
IL_0025: callvirt     instance void class [System.Collections]System.Collections.Generic.List`1<string>::Add(!0/*string*/)
```

### Different ways to initialize collections on creation

Consider the following class:

```cs
public class SomeClass
{
    public List<string> Values { get; set; }
}
```

Using initializers - you can create a new instance of it like this:

```cs
var someObject = new SomeClass()
{
    Values = new List<string> { "value1", "value2", "value3" }
};
```

You can also do the following (note the missing new) - but be careful - you will get a runtime NullReferenceException if the list is not instantiated:

```cs
var someObject = new SomeClass()
{
    Values = { "value1", "value2", "value3" }
};
```

To avoid the NullReferenceException you can set a default value for Values in SomeClass. This could also be useful if you always want a value in the list:

```cs
public class SomeClass
{
    public List<string> Values { get; set; } = new List<string>();
}
```

### So how does the C# compiler know which classes support collection initializers?

Basically - it checks that the class implements IEnumerable. If it does - it can be used with a collection initializer.

### Abusing IEnumerable and collection initializers to build an addition calculator

Before we dive into this - I have to warn you. Don't do something like this in production.

Consider the following class:

```cs
public class Adder
{
    public int Result { get; private set; } = 0;

    public void Add(int addend)
    {
        Result += addend;
    }
}
```

We can use it as follows:

```cs
var adder = new Adder();
adder.Add(1);
adder.Add(1);
adder.Add(1);
adder.Add(1);

Console.WriteLine(adder.Result); // 4
```

But what would happen if we implemented IEnumerable on it and used a collection initializer? Would that work?

Here is the same class - but implementing IEnumerable:

```cs
public class Adder : IEnumerable
{
    public int Result { get; private set; } = 0;

    public void Add(int addend)
    {
        Result += addend;
    }

    public IEnumerator GetEnumerator()
    {
        throw new NotImplementedException();
    }
}
```

Usage - note the use of the collection initializer. The C# compiler will automatically insert all the calls to ".Add" in the IL:

```cs
var adder = new Adder { 1, 1, 1, 1 };

Console.WriteLine(calculator.Result); // 4
```

As you can see - by implementing IEnumerable on our class we can "force" the compiler to allow us to use collection initializers instead of typing ".Add" several times.

If you are interested in learning more about collection initializers in C# - I would highly recommend reading [C# In Depth](https://csharpindepth.com/) which covers initializers and many other topics in great detail.