﻿using System.Collections.Generic;
using System.Web.Configuration;
using System.Web.Mvc;
using Taksopark.BL;
using Taksopark.DAL.Models;
using Taksopark.MVC.Models;

namespace Taksopark.MVC.Controllers
{
    public class UserProfileController : Controller
    {
        private readonly string _connectionString = WebConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString;

        [HttpGet]
        public ActionResult GetUserProfile()
        {
            if (Session["UserLogin"] == null)
            {
                return RedirectToAction("Index", "Home");
            }
            var userBl = new UserBl(_connectionString);
            var user = userBl.GetUserByLogin((string) Session["UserLogin"]);
            var editProfileModel = new EditProfileModel
            {
                Id = user.Id,
                FirstName = user.UserName,
                LastName = user.LastName,
                Login = user.Login,
                PhoneNumber = user.PhoneNumber,
                Email = user.Email,
                Password = user.Password,
                ConfirmPassword = user.Password
            };
            return View(editProfileModel);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult GetUserProfile(EditProfileModel editProfileModel)
        {
            if (ModelState.IsValid)
            {
                var userBl = new UserBl(_connectionString);
                var user = new User
                {
                    LastName = editProfileModel.LastName,
                    UserName = editProfileModel.FirstName,
                    PhoneNumber = editProfileModel.PhoneNumber,
                    Email = editProfileModel.Email,
                    Id = editProfileModel.Id,
                    Login = editProfileModel.Login,
                    Role = "Client",
                    Status = "Active",
                    Password = editProfileModel.Password
                };
                userBl.UpdateUser(user);
                Session["UserFullName"] = user.UserName + " " + user.LastName;
                return RedirectToAction("Index", "Home");   
            }
            return View(editProfileModel);
        }

        public ActionResult GetUserHistory()
        {
            var userBl = new UserBl(_connectionString);
            var user = userBl.GetUserByLogin((string) Session["UserLogin"]);
            var requestList = userBl.GetAllRequestsByCreatorID(user.Id);
            var requestModelList = new List<RequestModel>();
            foreach (var request in requestList)
            {
                var requestModel = new RequestModel
                {
                    PhoneNumber = request.PhoneNumber,
                    FinishPoint = request.FinishPoint,
                    StartPoint = request.StartPoint,
                    RequesTime = request.RequesTime,
                    Status = request.Status
                };
                requestModelList.Add(requestModel);
            }
            return View(requestModelList);
        }

        public ActionResult GetRequestDetails(RequestModel model)
        {
            return View(model);
        }


    }
}