﻿using System;

namespace Taksopark.DAL.Models
{
    public class Request
    {
        public int Id { get; set; }
        public DateTime RequesTime { get; set; }
        public int? CreatorId { get; set; }
        public int? OperatorId { get; set; }
        public int? DriverId { get; set; }
        public string PhoneNumber { get; set; }
        public int Status { get; set; }
        public string StartPoint { get; set; }
        public string FinishPoint { get; set; }
        public decimal? Price { get; set; }
        public string Additional { get; set; }
    }
}