﻿using FluentData;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CRUDwFluentData.Controllers
{
    public class CustomerController : ApiController
    {
        // GET: api/Customer
        public IEnumerable<dynamic> Get()
        {
            IDbContext Context = new DbContext().ConnectionStringName("Chinook", new SqlServerProvider());
            IEnumerable<dynamic> customers = Context.Sql("SELECT * FROM Customer").QueryMany<dynamic>();
            return customers;
        }

        // GET: api/Customer/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Customer
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Customer/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Customer/5
        public void Delete(int id)
        {
        }
    }
}