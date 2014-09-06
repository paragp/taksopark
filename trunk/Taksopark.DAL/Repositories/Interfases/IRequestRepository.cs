﻿using System.Collections.Generic;
using Taksopark.DAL.Models;

namespace Taksopark.DAL.Repositories.Interfases
{
    interface IRequestRepository
    {
        void Update(Request request);
        void Create(Request request);
        IEnumerable<Request> GetAllRequests();
        void DeleteRequest(int requestId);
    }
}
