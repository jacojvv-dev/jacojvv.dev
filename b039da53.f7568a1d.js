(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{77:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),o=(a(0),a(88)),i=a(90),l={id:"moving-databricks-from-one-azure-subscription-to-another",title:"Moving Databricks from one Azure subscription to another",author:"Jaco Jansen van Vuuren",author_title:"Software Developer",author_url:"https://github.com/jacojvv-dev",author_image_url:"https://avatars0.githubusercontent.com/u/14131955?v=4",tags:["azure","databricks"]},s={permalink:"/blog/moving-databricks-from-one-azure-subscription-to-another",editUrl:"https://github.com/jacojvv-dev/jacojvv.dev/edit/main/blog/2020-08-27-moving-databricks-from-one-azure-subscription-to-another.md",source:"@site/blog\\2020-08-27-moving-databricks-from-one-azure-subscription-to-another.md",description:"I recently needed to move a Databricks instance from one Azure subscription to another - online resources on this topic were scarce - so I thought I could contribute a little something to the world. Hopefully it's useful to someone.",date:"2020-08-27T00:00:00.000Z",tags:[{label:"azure",permalink:"/blog/tags/azure"},{label:"databricks",permalink:"/blog/tags/databricks"}],title:"Moving Databricks from one Azure subscription to another",readingTime:6.42,truncated:!0,nextItem:{title:"A case for a lower footprint JSON specification",permalink:"/blog/a-case-for-a-lower-footprint-json-specification"}},c=[{value:"Can&#39;t I just change the subscription?",id:"cant-i-just-change-the-subscription",children:[]},{value:"Before we start - navigating and downloading files from the databricks filesystem",id:"before-we-start---navigating-and-downloading-files-from-the-databricks-filesystem",children:[]},{value:"Exporting/Importing the workspace",id:"exportingimporting-the-workspace",children:[]},{value:"Recreate interactive cluster(s)",id:"recreate-interactive-clusters",children:[]},{value:"Export/Import data",id:"exportimport-data",children:[]},{value:"Export/Import checkpoints",id:"exportimport-checkpoints",children:[]},{value:"That should be it",id:"that-should-be-it",children:[]}],u={rightToc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"I recently needed to move a Databricks instance from one Azure subscription to another - online resources on this topic were scarce - so I thought I could contribute a little something to the world. Hopefully it's useful to someone."),Object(o.b)("h3",{id:"cant-i-just-change-the-subscription"},"Can't I just change the subscription?"),Object(o.b)("p",null,"Unfortunately - this is not an option for Databricks - so it has to be done manually. The process is rinse and repeat once you know what to do."),Object(o.b)("h3",{id:"before-we-start---navigating-and-downloading-files-from-the-databricks-filesystem"},"Before we start - navigating and downloading files from the databricks filesystem"),Object(o.b)("p",null,'This is an essential skill needed to follow along - as you\'ll need to download several files from your old instance. By far the easiest way to view your databricks file structure is via the "Data" tab.'),Object(o.b)("p",null,'On the side tab go to "Data" and then click on "Add Data". Once the page loads switch the tab to DBFS.'),Object(o.b)("img",{alt:"Databricks file explorer",src:Object(i.a)("img/moving-databricks/07_file_explorer.png")}),Object(o.b)("p",null,'Everything in the "FileStore" directory can downloaded by accessing a url. For example - if you wanted to download the file from\n',Object(o.b)("em",{parentName:"p"},"/FileStore/cpbak/app_store_huawei_cosmos_v1.zip")," you can go the following url to download it ",Object(o.b)("em",{parentName:"p"},"https://{your-sub-domain}.azuredatabricks.net/files/cpbak/app_store_huawei_cosmos_v1.zip")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},'note: "FileStore" becomes "files"')),Object(o.b)("img",{alt:"Databricks file explorer",src:Object(i.a)("img/moving-databricks/08_file_explorer_file.png")}),Object(o.b)("h3",{id:"exportingimporting-the-workspace"},"Exporting/Importing the workspace"),Object(o.b)("p",null,"First things first - we need to export and import our workspace from the old instance to the new instance."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},'On the old instance - export your workspace. Make sure to select "DBC Archive".')),Object(o.b)("img",{alt:"Exporting your workspace",src:Object(i.a)("img/moving-databricks/01_export_workspace.png")}),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"On the new instance - start the import.")),Object(o.b)("img",{alt:"Importing your workspace",src:Object(i.a)("img/moving-databricks/02_import_workspace_01.png")}),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Select the .dbc file that was exported during step one and click import.")),Object(o.b)("img",{alt:"Importing your workspace",src:Object(i.a)("img/moving-databricks/03_import_workspace_02.png")}),Object(o.b)("p",null,"Your workbooks will now all be on the new Databricks instance."),Object(o.b)("h3",{id:"recreate-interactive-clusters"},"Recreate interactive cluster(s)"),Object(o.b)("p",null,"The next thing you'll want to do is recreate the cluster that you use for running/testing things interactively - this means all of the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Selecting the same Spark/Scala/Python versions & sizing it appropriately"),Object(o.b)("li",{parentName:"ul"},"Installing the same jar files and/or Maven dependencies")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},'On the side tab go to "Clusters", then click "Create Cluster", copy the details of your existing cluster over to the new cluster - make sure you keep versions the same so that you don\'t have errors when running your notebooks. When you have filled in the details - click "Create Cluster"')),Object(o.b)("img",{alt:"Cluster setup",src:Object(i.a)("img/moving-databricks/04_cluster_reference.png")}),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},'Once the cluster is recreated you\'ll need to reinstall any libraries that were installed on the old cluster. On the side tab go to "Clusters", then click on your newly created cluster. When your cluster loads - switch to the "Libraries" tab')),Object(o.b)("img",{alt:"Libraries tab",src:Object(i.a)("img/moving-databricks/05_library_cluster_tab.png")}),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Install any libraries until you match the old instance. Make sure your versions are the same!")),Object(o.b)("img",{alt:"Installed libraries",src:Object(i.a)("img/moving-databricks/06_installed_cluster_libraries.png")}),Object(o.b)("h3",{id:"exportimport-data"},"Export/Import data"),Object(o.b)("p",null,"To export your data - use the following. It will export your data as CSV to the file store so that you can download it."),Object(o.b)("p",null,"You can read more about it ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://towardsdatascience.com/databricks-how-to-save-files-in-csv-on-your-local-computer-3d0c70e6a9ab"}),"here")," - there are easier options you can use if your dataset has less than a million rows."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'data = spark.read.format("delta").table("<delta-table-name>")\ndata.coalesce(1)\n    .write\n    .format("com.databricks.spark.csv")\n    .option("header", "true")\n    .save("dbfs:/FileStore/df/<delta-table-name>.csv")\n')),Object(o.b)("p",null,"After downloading your exported CSV data we can upload it to the new Databricks instance."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},'On the side tab go to "Data" and then click on "Add Data". Select the CSV file you just downloaded. Click on "Create Table With UI", select your cluster and then "Preview Table"')),Object(o.b)("img",{alt:"Create new table",src:Object(i.a)("img/moving-databricks/09_create_new_table.png")}),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},'Make sure your data is parsed correctly and that the schema matches the schema on your old cluster. When you are happy - click on "Create Table". ',Object(o.b)("em",{parentName:"li"},"(Don't infer schema on a large file - it will take a very long time!)"))),Object(o.b)("img",{alt:"Validate table schema",src:Object(i.a)("img/moving-databricks/10_validate_schema.png")}),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Optional - you can optionally create the database schema using delta and then insert the imported data into that table - this is my preferred method because sometimes the CSV files are more than 2GB large and I need to import several distinct files. Just make sure the table name is different than the delta table when importing")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE tablename (\n  FieldOne      STRING,\n  FieldTwo      STRING)\nUSING DELTA\n\nMERGE INTO tablename t\n    USING tablename_csv_import s -- replace tablename_csv_import with the name of the table you created when importing the csv\n    ON t.FieldOne = s.FieldOne AND t.FieldTwo = s.FieldTwo\n    WHEN NOT MATCHED THEN INSERT\n        (FieldOne, FieldTwo) VALUES (s.FieldOne, s.FieldTwo)\n")),Object(o.b)("p",null,"If your file is larger than 2GB - try to gzip it. If it is still too large I wrote the following nodejs utility to split the CSV. ",Object(o.b)("em",{parentName:"p"},"If you have a lot of data - I highly recommend adding the folder where this code executes to your antivirus exclusion list.")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'const fs = require("fs");\nconst readline = require("readline");\nconst splitAtInterval = 4000000; // adjust this number to whatever produces files below 2GB in size\nconst filename = "data"; // data.csv\n\nif (!fs.existsSync("./splits")) {\n  fs.mkdirSync(`./splits`);\n}\nif (!fs.existsSync(`./splits/${filename}`)) {\n  fs.mkdirSync(`./splits/${filename}`);\n}\n\nconst readInterface = readline.createInterface({\n  input: fs.createReadStream(`${filename}.csv`),\n  output: null, //process.stdout,\n  console: false,\n});\n\nlet header;\nlet i = 0;\nlet split = 1;\nlet stream;\n\nreadInterface.on("line", function (line) {\n  line = `${line}\\n\\r`;\n  if (i == 0) {\n    header = line;\n    i++;\n    return;\n  }\n\n  if (!stream) {\n    stream = fs.createWriteStream(\n      `./splits/${filename}/${filename}_split_${split}.csv`,\n      { flags: "a" }\n    );\n    stream.write(header);\n  }\n\n  stream.write(line);\n\n  if (i % splitAtInterval === 0) {\n    stream.end();\n    split++;\n    stream = null;\n  }\n\n  i++;\n});\n')),Object(o.b)("p",null,"After the splits have been created - use GZIP for some extra savings. If you are on Windows - you may need to install WSL."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"gzip -k data_split_1.csv\n")),Object(o.b)("p",null,"If you are struggling with uploading via the web interface you can do the following:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Upload the split files to Azure Storage"),Object(o.b)("li",{parentName:"ol"},"Download the files to your databricks instance storage")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'spark.conf.set(\n  "fs.azure.account.key.<account-name>.blob.core.windows.net",\n  "<account-key>")\n\n# If you would like to see the available files - run the ls command\ndbutils.fs.ls("wasbs://<container-name>@<account-name>.blob.core.windows.net/path/to/dump/folder")\n\n# Copy the file\ndbutils.fs.cp("wasbs://<container-name>@<account-name>.blob.core.windows.net/path/to/file.csv", "/datadumps/file.csv")\n')),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"When creating the table - switch to the DBFS tab, find and select your csv file and then do the import")),Object(o.b)("img",{alt:"New table - DBFS tab",src:Object(i.a)("img/moving-databricks/11_import_csv_dbfs.png")}),Object(o.b)("h3",{id:"exportimport-checkpoints"},"Export/Import checkpoints"),Object(o.b)("p",null,"If you use structured streaming - you'll most likely need to move your checkpoints as well."),Object(o.b)("p",null,"If you are going to move checkpoints - it's probably a good idea to move the data at the same time; furthermore - you want to make sure that the notebook that changes the checkpoint is also stopped before initiating the move. Otherwise you might lose some data."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"On your old cluster - export your checkpoints to zip files")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'import shutil\nshutil.make_archive("/dbfs/FileStore/checkpoint_backup/checkpoint_zip_name", \'zip\', "/path/to/your/checkpoint")\n')),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Download your checkpoint zip file using the DBFS explorer"),Object(o.b)("li",{parentName:"ol"},"Upload the downloaded zip file to Azure Storage"),Object(o.b)("li",{parentName:"ol"},"Import the zip file on your new cluster by downloading and unzipping it")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'import zipfile\n\nspark.conf.set(\n  "fs.azure.account.key.<account-name>.blob.core.windows.net",\n  "<account-key>")\n\ndbutils.fs.cp("wasbs://<container>@<account-name>.blob.core.windows.net/path/to/file.zip", "/checkpoint_backup/checkpoint_zip_name.zip")\nwith zipfile.ZipFile("/dbfs/checkpoint_backup/checkpoint_zip_name.zip", \'r\') as zip_ref:\n    zip_ref.extractall("/dbfs/path/to/your/checkpoint") # this path here should match your checkpoint location, minus the /dbfs part\n')),Object(o.b)("h3",{id:"that-should-be-it"},"That should be it"),Object(o.b)("p",null,"You should be almost all of the way now with the migration - I would recommend that you make sure you have done everything in the following list as well:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Set up your jobs"),Object(o.b)("li",{parentName:"ul"},"Make sure the clusters that your jobs use are the same as in the old cluster"),Object(o.b)("li",{parentName:"ul"},"Make sure you have the same schedules for all your jobs"),Object(o.b)("li",{parentName:"ul"},"Make sure everything works after you are finished by running your notebooks and monitoring scheduled jobs"),Object(o.b)("li",{parentName:"ul"},"Clean up any extra files you may have left in storage containers - to mitigate incurring costs")),Object(o.b)("p",null,"Good luck!"))}b.isMDXComponent=!0},87:function(e,t,a){"use strict";var n=a(0),r=a(20);t.a=function(){const e=Object(n.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},88:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=u(a),d=n,h=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return a?r.a.createElement(h,l(l({ref:t},c),{},{components:a})):r.a.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},90:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return i}));var n=a(87),r=a(92);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.a)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return t+a;const i=!a.startsWith(t)?t+a.replace(/^\//,""):a;return o?e+i:i}(t,e,a,n)}}function i(e,t={}){const{withBaseUrl:a}=o();return a(e,t)}},92:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))}}]);