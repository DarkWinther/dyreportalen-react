using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace dyreportalen_webapi.Configuration
{
    public class DyreportalenAPIConfig
    {
        public static void Register(HttpConfiguration config)
        {
            //ContainerBuilder builder = new ContainerBuilder();
            //builder.RegisterAssemblyModules(Assembly.GetExecutingAssembly());
            //IContainer container = builder.Build();

            //config.DependencyResolver = new AutofacWebApiDependencyResolver

            // Web API routes
            var json = config.Formatters.JsonFormatter;
            json.SerializerSettings.PreserveReferencesHandling = Newtonsoft.Json.PreserveReferencesHandling.Objects;
            config.Formatters.Remove(config.Formatters.XmlFormatter);
            json.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;

            //config.EnableCors();
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "Dyreportalen API",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}