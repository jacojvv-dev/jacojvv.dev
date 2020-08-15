---
id: a-case-for-a-lower-footprint-json-specification
title: A case for a lower footprint JSON specification
author: Jaco Jansen van Vuuren
author_title: Software Developer
author_url: https://github.com/jacojvv-dev
author_image_url: https://avatars0.githubusercontent.com/u/14131955?v=4
tags: [json, network traffic, saving polar bears (maybe?), api]
---

As human beings we tend not to think about things too much once they work. We all have that one application running somewhere on a server rotting away that "just works" - we should probably revise it every now and again - but we don't - because it's a mental load we just don't need.

I'd argue that we apply the same mindset to our daily tools and established patterns - without ever thinking about it too much either. Recently while downloading a 4.26 GB CSV file from an Azure Databricks instance I was reminded of an idea I had a few months ago; JSON can be optimised.

<!--truncate-->

### JSON can be optimised?

Yeah - anything can. Imagine I'd said the same thing about XML a good few years ago - blasphemy. I'd be stoned as soon as people could look away from their (irreplaceable) SOAP services to read my wild ideas!

### The problem

A lot of what we transfer with APIs today is redundant data - namely - property names in JSON. You might think this is negligible detail of the JSON specification and the amount of data that is transferred is minimal - but it will add up over time. As an example of reduncacy - let's look at my 4.26 GB CSV file - but convert it to a JSON file and compare the difference in size.

_you may be wondering why I am comparing to a CSV file and the reason is rather simple - CSV is doing something right in the way it transfers data. Property names are only ever sent once and only once._

### Converting and comparing the difference in size

To convert the CSV file into JSON - I wrote a little utility using nodejs. Turns our reading and converting 4.26 GB of data wasn't easily possible - and I was too tired to write something elegant - so I opted to just output the JSON at every 100000 lines of CSV.

I can already hear someone saying that the extra pair of "[" per file is going to taint the result - but at the scale of the data - I really don't think it will matter.

```javascript
const csv = require("csv-parser");
const fs = require("fs");

let results = [];
let i = 0;

fs.createReadStream("large.csv")
  .pipe(csv())
  .on("data", (data) => {
    if (i % 100000 === 0) {
      writeResultsToFile();
    }
    results.push(data);
    i++;
  })
  .on("end", () => {
    writeResultsToFile();
  });

function writeResultsToFile() {
  fs.writeFileSync(`json/${i}.json`, JSON.stringify(results));
  results = [];
}
```

### The difference in size between CSV and JSON

| Type | Size (GB) | Size (MB) | Size Gain (GB) | Size Gain (MB) | Size Gain (%) | Information Gain (%) |
| :--- | :-------: | :-------: | :------------: | :------------: | :-----------: | -------------------: |
| CSV  |   4.26    |  4583.37  |       -        |       -        |       -       |                    - |
| JSON |   7.54    |  8096.81  |     +3.28      |    +3513.44    |    43.39%     |                   0% |

As expected - a rather massive increase of 43% for absolutely no extra information. Redundant data - killing polar bears as it travels through our networks.

### The solution

We need a JSON specification that removes as much of the redundancy as possible - whilst keeping the ease of use of JSON that we all came to know and love.

### My (probably bad) attempt at solving the problem

Instead of defining our properties for every object when we have an array - we can define a map that we can use to perform the lookup. This will remove the need to send redundant data over the wire.

##### Current

```json
[
  {
    "propertyOne": "valueOne",
    "propertyTwo": "valueTwo",
    "propertyThree": "valueThree",
    "propertyFour": {
        "ChildOne": 1,
        "ChildTwo": false,
        "ChildThree": "E"
    }
  },
  {
    "propertyOne": "valueOne",
    "propertyTwo": "valueTwo",
    "propertyThree": "valueThree",
    "propertyFour": {
        "ChildOne": 1,
        "ChildTwo": false,
        "ChildThree": "E"
    }
  },
  {
    "propertyOne": "valueOne",
    "propertyTwo": "valueTwo",
    "propertyThree": "valueThree",
    "propertyFour": {
        "ChildOne": 1,
        "ChildTwo": false,
        "ChildThree": "E"
    }
  }
  ...
]
```

##### Proposed

_I have dubbed it json-b and you can read my bad attempt at implementing it [here](https://github.com/jacojvv-dev/json-b)_

```json
//jsonb//
{"1":"propertyOne", "2": "propertyTwo", "3": "propertyThree", "4": "propertyFour", "4.1": "ChildOne", "4.2": "ChildTwo", "4.3": "ChildThree"}
//jsonb//
[
  {
    "1": "valueOne",
    "2": "valueTwo",
    "3": "valueThree",
    "4": {
        "4.1": 1,
        "4.2": false,
        "4.3": "E"
    }
  },
  {
    "1": "valueOne",
    "2": "valueTwo",
    "3": "valueThree",
    "4": {
        "4.1": 1,
        "4.2": false,
        "4.3": "E"
    }
  },
  {
    "1": "valueOne",
    "2": "valueTwo",
    "3": "valueThree",
    "4": {
        "4.1": 1,
        "4.2": false,
        "4.3": "E"
    }
  }
  ...
]
```

### Converting

To compare the results - I wrote a naive [(and very bad, and not feature complete, and definitely not close to production ready)](https://github.com/jacojvv-dev/json-b) implementation of my proposal and applied it to one of the files from the previous CSV -> JSON conversion.

```javascript
const fs = require("fs");
const JSONB = require("json-b");

// super optimised stuff ;)
const data = JSON.parse(fs.readFileSync("100000.json"));
fs.writeFileSync("100000.jsonb", JSONB.stringify(data));
```

### The difference in size between JSON and JSON-B

| Type   | Size (MB) | Size Reduction (MB) | Size Reduction (%) | Information Lost (%) |
| :----- | :-------: | :-----------------: | :----------------: | -------------------: |
| JSON   |   68.8    |          -          |         -          |                    - |
| JSON-B |   51.5    |        -17.3        |      -25.15%       |                 0%\* |

\* _If you use my json-b implemenation on real world data, you'll probably lose information_

### Yeah - ok. But GZIP fixes the issue you are trying to fix?

For the most part - it does. But we are trying to squeeze out every byte we can.

| Type             | Size (MB) | Size Reduction (MB) | Size Reduction (%) | Information Lost (%) |
| :--------------- | :-------: | :-----------------: | :----------------: | -------------------: |
| JSON (Gzipped)   |   8.84    |          -          |         -          |                    - |
| JSON-B (Gzipped) |   8.33    |        -0.51        |       -5.77%       |                 0%\* |

### Ok - so how much bandwith are we talking about saving using json-b and gzip?

In the real world you'll probably not return 100000 rows at a time - so let's use a better [example](https://jsonplaceholder.typicode.com/posts). We'll also pretend you have a very popular blog - and get 100000 hits per day.

| Type             | Size (KB) | Bandwith Per Day (KB) | Bandwidth For 30 Days (MB) | Difference Over 30 Days (MB) |
| :--------------- | :-------: | :-------------------: | :------------------------: | ---------------------------: |
| JSON (Gzipped)   |   6.94    |        694000         |           20820            |                            - |
| JSON-B (Gzipped) |   6.72    |        672000         |           20160            |                          660 |

### Ok. So should we seriously consider doing this?

Probably not. The savings in electricity costs needed to transfer the data might be outweighed by the processing power needed to parse/stringify json-b files. GZIP also does a pretty good job already. Furthermore - in some cases, like where the response is only an object - json-b might make things larger.

It is an interesting thought experiment and I find it very curious to imagine what the global bandwith saving could be if we all used a more optimised JSON.
