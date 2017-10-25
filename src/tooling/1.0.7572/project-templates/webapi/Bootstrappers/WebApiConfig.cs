using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Formatting;
using System.Web.Http;
using System.Web.Http.Cors;
using Omnia.Foundation.Extensibility.WebApi.Handlers;

namespace $safeprojectname$.Bootstrappers
{
    public static class WebApiConfig
    {
        /// <summary>
        /// Registers the specified configuration.
        /// </summary>
        /// <param name="config">The configuration.</param>
        public static void Register(HttpConfiguration config)
        {
            config.MessageHandlers.Add(new MessageHandler());

            // Attribute based routing.
            config.MapHttpAttributeRoutes();

            //Enable cors globally
            config.EnableCors(new EnableCorsAttribute("*", "*", "*"));

            //We want CamelCasing on json
            var jsonFormatter = GlobalConfiguration.Configuration.Formatters.OfType<JsonMediaTypeFormatter>().First();
            jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            jsonFormatter.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;


        }
    }
}