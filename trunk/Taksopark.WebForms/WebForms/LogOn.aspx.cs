﻿using System;
using System.Web;
using System.Web.Security;
using Microsoft.Practices.Unity;
using Taksopark.BL.Interfaces;
using Taksopark.DAL.Enums;
using Unity.WebForms;

namespace Taksopark.WebForms.WebForms
{
    public partial class LogOn : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void LogOn_Click(object sender, EventArgs e)
        {
            var userBl = HttpContext.Current.Application.GetContainer().Resolve<IUserBl>();
            var login = Request["txtUserName"];
            var password = Request["txtUserPass"];
            var user = userBl.GetUserByLoginAndPassword(login, password);
            if (user.UserName != null)
            {
                if (user.Role == (int) RolesEnum.Operator)
                {
                    Response.Redirect("Home.aspx");
                    FormsAuthentication.SetAuthCookie(user.Login, false);
                }
                else if (user.Role == (int) RolesEnum.Admin)
                {
                    Response.Redirect("Users.aspx");
                    FormsAuthentication.SetAuthCookie(user.Login, false);
                }
            }
        }
    }
}