﻿using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Microsoft.Practices.Unity;
using Taksopark.BL;
using Taksopark.BL.Interfaces;
using Taksopark.DAL;
using Taksopark.DAL.Models;
using Taksopark.WebForms.Classes;
using Unity.WebForms;

namespace Taksopark.WebForms.WebForms
{
    public partial class Operators : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        public static IEnumerable<User> GetAllOperatorsFromRepository()
        {
            IAdminBl adminBl = HttpContext.Current.Application.GetContainer().Resolve<IAdminBl>();
            var AllOperators = adminBl.GetUserByRole("Operator");
            return AllOperators;
        }

        protected void OperatorsTable_GridViewClicked(object sender, GridViewEventArgs e)
        {
            Response.Redirect(String.Format("~/WebForms/EditOperator.aspx?id={0}", e.UserId));
        }

        protected void btnAdd_Click(object sender, EventArgs e)
        {
            Response.Redirect("~/WebForms/AddOperator.aspx");
        }
    }
}