﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Taksopark.DAL.Models;
using Taksopark.DAL.Repositories.Interfases;
using Taksopark.DAL.Repositories.Mappers;

namespace Taksopark.DAL.Repositories
{
    public class DriverRepository: IDriverRepository
    {
        private readonly SqlConnection _connection;

        public DriverRepository(SqlConnection connection)
        {
            _connection = connection;
        }

        /// <summary>
        /// Get all driver records
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Driver> GetAllDrivers()
        {
            var driverList = new List<Driver>();
            using (var command = new SqlCommand("GetAllDrivers", _connection))
            {
                command.CommandType = CommandType.StoredProcedure;
                using (var reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        var driver = DriverMapper.Map(reader);
                        driverList.Add(driver);
                    }
                }
            }
            return driverList;
        }

        /// <summary>
        /// Get drivers by satus
        /// </summary>
        /// <param name="status"></param>
        /// <returns></returns>
        public IEnumerable<Driver> GetAllDriversByStatus(string status)
        {
            var driverList = new List<Driver>();
            using (var command = new SqlCommand("GetAllDriversByStatus", _connection))
            {
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.AddWithValue("@Status", status);
                var driver = new Driver();
                using (var reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        driver = DriverMapper.Map(reader);
                        driverList.Add(driver);
                    }
                }
                return driverList;
            }
        }
    }
}
