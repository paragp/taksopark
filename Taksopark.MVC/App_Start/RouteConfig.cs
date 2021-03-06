﻿using System.Web.Mvc;
using System.Web.Routing;

namespace Taksopark.MVC
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
            name: "Account/LogIn",
            url: "login",
            defaults: new { controller = "Account", action = "login" }
        );
            routes.MapRoute(
                name: "Account/RegisterUser",
                url: "register",
                defaults: new { controller = "Account", action = "RegisterUser" }
            );

            routes.MapRoute(
                name: "UserProfile/GetUserHistory",
                url: "orders",
                defaults: new { controller = "UserProfile", action = "GetUserHistory" }
            );

            routes.MapRoute(
            name: "UserProfile/GetUserProfile",
            url: "profile",
            defaults: new { controller = "UserProfile", action = "GetUserProfile" }
        );

            

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
