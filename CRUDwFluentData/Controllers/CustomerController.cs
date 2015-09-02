using FluentData;
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
        public dynamic Get(int id)
        {
            IDbContext Context = new DbContext().ConnectionStringName("Chinook", new SqlServerProvider());
            dynamic customer = Context.Sql("SELECT * FROM Customer WHERE CustomerId = @0", id).QuerySingle<dynamic>();
            return customer;
        }

        // POST: api/Customer
        public int Post([FromBody] dynamic customer)
        {
            IDbContext Context = new DbContext().ConnectionStringName("Chinook", new SqlServerProvider());
            int customerId = Context.Sql(@"INSERT INTO Customer(FirstName, LastName, Address, City, Country,
                                PostalCode, Phone, Email) VALUES(@0, @1, @2, @3, @4, @5, @6, @7);")
                                .Parameters(
                                    (string)customer.FirstName,
                                    (string)customer.LastName,
                                    (string)customer.Address,
                                    (string)customer.City,
                                    (string)customer.Country,
                                    (string)customer.PostalCode,
                                    (string)customer.Phone,
                                    (string)customer.Email)
                                .ExecuteReturnLastId<int>();

            return customerId;
        }

        // PUT: api/Customer/5
        public int Put([FromBody] dynamic customer)
        {
            IDbContext Context = new DbContext().ConnectionStringName("Chinook", new SqlServerProvider());

            int rowsAffected = Context.Sql(@"UPDATE Customer SET 
                                                    FirstName = @0, 
                                                    LastName = @1, 
                                                    Address = @2, 
                                                    City = @3, 
                                                    Country = @4,
                                                    PostalCode = @5, 
                                                    Phone = @6, 
                                                    Email = @7
                                                WHERE CustomerId = @8;")
                                        .Parameters(
                                            (string)customer.FirstName,
                                            (string)customer.LastName,
                                            (string)customer.Address,
                                            (string)customer.City,
                                            (string)customer.Country,
                                            (string)customer.PostalCode,
                                            (string)customer.Phone,
                                            (string)customer.Email,
                                            (int)customer.CustomerId)
                                        .Execute();

            return (int)customer.CustomerId;
        }

        // DELETE: api/Customer/5
        public void Delete(int id)
        {
            IDbContext Context = new DbContext().ConnectionStringName("Chinook", new SqlServerProvider());
            int rowsAffected = Context.Sql("DELETE FROM Customer WHERE CustomerId = @0", id).Execute();
        }
    }
}
