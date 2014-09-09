﻿using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
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
            UnitOfWork uow = new UnitOfWork(ConfigurationManager.ConnectionStrings["TaksoparkDB"].ConnectionString);
            uow.UserRepository.Create(new User()
            {
                UserName = tbxOperatorName.Text,
                LastName = tbxLastName.Text,
                Login = tbxLogin.Text,
                Password = tbxPassword.Text,
                Role = "Operator",
                Status = tbxStatus.Text
            });
            Response.Redirect("Operators.aspx");
        }
    }
}