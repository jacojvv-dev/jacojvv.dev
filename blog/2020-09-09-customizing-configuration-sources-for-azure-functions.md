---
id: customizing-configuration-sources-for-azure-functions
title: Customizing configuration sources for Azure Functions
author: Jaco Jansen van Vuuren
author_title: Software Developer
author_url: https://github.com/jacojvv-dev
author_image_url: https://avatars0.githubusercontent.com/u/14131955?v=4
tags: [azure, functions, .net]
image: https://www.jacojvv.dev/img/covers/2020-10-09-customizing-configuration-sources-for-azure-functions.png
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Ever needed to add a YAML/JSON file as a configuration source for your Azure Function app? Up until this point you would have been stuck using some workaround - but the functions team just rolled out preview support for customizing configuration sources.

<!--truncate-->

To get started you'll need to install the preview release of `Microsoft.Azure.Functions.Extensions` from [NuGet](https://www.nuget.org/packages/Microsoft.Azure.Functions.Extensions/1.1.0-preview1) (make sure you tick "Include prerelease").

<img alt="Databricks file explorer" src={useBaseUrl('img/function-configuration/nuget_screenshot.png')} />

After you've installed the preview package you simply need to override `ConfigureAppConfiguration` in your `Startup` class.

```cs
using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.IO;

[assembly: FunctionsStartup(typeof(JacoJvv.Demo.Function.Startup))]
namespace JacoJvv.Demo.Function
{
    public class Startup : FunctionsStartup
    {
        public override void Configure(IFunctionsHostBuilder builder)
        {
            builder.Services.AddOptions<HostOptions>()
                            .Configure<IConfiguration>((settings, configuration) =>
                            {
                                configuration.GetSection("apiHosts").Bind(settings);
                            });
        }

        public override void ConfigureAppConfiguration(IFunctionsConfigurationBuilder builder)
        {
            var context = builder.GetContext();
            builder.ConfigurationBuilder
                .AddYamlFile(Path.Combine(context.ApplicationRootPath, "hostConfiguration.yml"), optional: true, reloadOnChange: false)
                .AddEnvironmentVariables();
        }
    }
}
```

That's it. Simple. A lot simpler than [this](https://github.com/Azure/azure-functions-host/issues/4464#issuecomment-554483114).

You can read more about it [on the official Microsoft docs](https://docs.microsoft.com/en-us/azure/azure-functions/functions-dotnet-dependency-injection#customizing-configuration-sources) if you are interested.
