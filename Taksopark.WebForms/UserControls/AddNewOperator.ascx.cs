﻿using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Taksopark.BL;
using Taksopark.DAL;
using Taksopark.DAL.Models;

namespace Taksopark.WebForms.UserControls
{
    public partial class AddNewOperator : System.Web.UI.UserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnAddNewOperator_Click(object sender, EventArgs e)
        {
            AdminBl adminBl = new AdminBl(ConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString);
            adminBl.CreateUser(new User()
            {
                UserName = tbxOperatorName.Text,
                LastName = tbxLastName.Text,
                Login = tbxLogin.Text,
                PhoneNumber = tbxPhoneNumber.Text,
                Email = tbxEmail.Text,
                Password = tbxPassword.Text,
                Role = "Operator",
                Status = tbxStatus.Text
            });
            Response.Redirect("~/WebForms/Operators.aspx");
        }
    }
}