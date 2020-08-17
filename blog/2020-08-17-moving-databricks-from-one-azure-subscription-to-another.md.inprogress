---
id: moving-databricks-from-one-azure-subscription-to-another
title: Moving Databricks from one Azure subscription to another
author: Jaco Jansen van Vuuren
author_title: Software Developer
author_url: https://github.com/jacojvv-dev
author_image_url: https://avatars0.githubusercontent.com/u/14131955?v=4
tags: [azure, databricks]
---

import useBaseUrl from '@docusaurus/useBaseUrl';

I recently needed to move the Databricks instance at immedia from one Azure subscription to another - online resources on this topic were scarce - so I thought I could contribute a little something to the world. Hopefully it's useful to someone.

<!--truncate-->

### Can't I just change the subscription?

Unfortunately - this is not an option for Databricks - so the only option left is to manually move all your data across. The process is rinse and repeat once you know what to do.

### Before we start - navigating and downloading files from the databricks filesystem

This is an essential skill needed to follow along - as you'll need to download several files from your old instance. By far the easiest way to view your databricks file structure is via the "Data" tab.

On the side tab go to "Data" and then click on "Add Data". Once the page loads switch the tab to DBFS.

<img alt="Databricks file explorer" src={useBaseUrl('img/moving-databricks/07_file_explorer.png')} />

Everything in the "FileStore" directory can be easily downloaded. For example - if you wanted to download the file from
_/FileStore/cpbak/app_store_huawei_cosmos_v1.zip_ you can go the following url to download it _https://{your-sub-domain}.azuredatabricks.net/files/cpbak/app_store_huawei_cosmos_v1.zip_

<img alt="Databricks file explorer" src={useBaseUrl('img/moving-databricks/08_file_explorer_file.png')} />

### Exporting/Importing the workspace

First things first - we need to export and import our workspace from the old instance to the new instance.

1. On the old instance - export your workspace. Make sure to select "DBC Archive".

<img alt="Exporting your workspace" src={useBaseUrl('img/moving-databricks/01_export_workspace.png')} />

2. On the new instance - start the import.

<img alt="Importing your workspace" src={useBaseUrl('img/moving-databricks/02_import_workspace_01.png')} />

3. Select the .dbc file that was exported during step one and click import.

<img alt="Importing your workspace" src={useBaseUrl('img/moving-databricks/03_import_workspace_02.png')} />

Your workbooks will now all be on the new Databricks instance.

### Recreate interactive cluster(s)

The next thing you'll want to to is recreate the cluster that you use for running/testing things interactively - this means all of the following:

- Selecting the same Spark/Scala/Python versions & sizing it appropriately
- Installing the same jar files or Maven dependencies

1. On the side tab go to "Clusters", then click "Create Cluster", copy the details of your existing cluster over to the new cluster - make sure you keep versions the same so that you don't have errors when running your notebooks. When you have filled in the details - click "Create Cluster".

<img alt="Cluster setup" src={useBaseUrl('img/moving-databricks/04_cluster_reference.png')} />

2. Once the cluster is recreated you'll need to reinstall any libraries that were installed. On the side tab go to "Clusters", then click on your newly created cluster. When your cluster loads - switch to the library tab.

<img alt="Library tab" src={useBaseUrl('img/moving-databricks/05_library_cluster_tab.png')} />

3. Install any libraries until you match the old instance. Make sure your versions are the same!

<img alt="Installed libraries" src={useBaseUrl('img/moving-databricks/06_installed_cluster_libraries.png')} />

### Export/Import data

To export your data - use the following. It will export your data as CSV to the file store so that you can download it.

You can read more about it [here](https://towardsdatascience.com/databricks-how-to-save-files-in-csv-on-your-local-computer-3d0c70e6a9ab). There are easier options you can use if your dataset is less than a million rows.

```python
data = spark.read.format("delta").table("<delta-table-name>")
data.coalesce(1)
    .write
    .format("com.databricks.spark.csv")
    .option("header", "true")
    .save("dbfs:/FileStore/df/<delta-table-name>.csv")
```

After downloading your exported CSV data we can upload it to the new Databricks instance.

1. On the side tab go to "Data" and then click on "Add Data". Select the CSV file you just downloaded. Click on "Create Table With UI", select your cluster and then "Preview Table".

<img alt="Create new table" src={useBaseUrl('img/moving-databricks/09_create_new_table.png')} />

2. Make sure your data is parsed correctly. Make sure that your types match the types on your old cluster. When you are happy - click on "Create Table".

<img alt="Validate table schema" src={useBaseUrl('img/moving-databricks/10_validate_schema.png')} />

3. Optional - you can optionally create the database schema using delta and then insert the imported data into that table - this is my preferred method because sometimes the CSV files are more than 2GB large and I need to import several distinct files. Just make sure the table name is different than the delta table when importing.

```sql
CREATE TABLE tablename (
  FieldOne      STRING,
  FieldTwo      STRING)
USING DELTA

MERGE INTO tablename t
    USING tablename_backup_import s
    ON t.FieldOne = s.FieldOne AND t.FieldTwo = s.FieldTwo
    WHEN NOT MATCHED THEN INSERT
        (FieldOne, FieldTwo) VALUES (s.FieldOne, s.FieldTwo)
```

### Export/Import checkpoints

If you use structured streaming - you'll most likely need to move your checkpoints as well.

### Other things you'll need to do

- Set up your jobs
- Make sure the clusters that your jobs use are the same as in the old cluster
- Make sure you have the same schedules for all your jobs
- Make sure everything works after you are finished

Good luck! May you Databricks endeavors be epic!
