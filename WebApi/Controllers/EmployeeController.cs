using System;
using System.Collections.Generic;
using System.Diagnostics.Tracing;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi.CustomModel;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly WebApiDbContext db;
        public EmployeeController(WebApiDbContext _db)
        {
            this.db = _db;
        }
        public IActionResult Get()
        {
            var employeelst = (from e in db.Employees
                               join c in db.Country on e.country_id equals c.id
                               select new
                               {
                                   e.id,
                                   c.country_name,
                                   e.job_title,
                                   e.address,
                                   e.name,
                                   e.email,
                                   e.gender,
                                   e.phone_no
                               }).ToList();
            return Ok(employeelst);
        }
        [Route("Country")]
        public IActionResult GetCountry()
        {
            var Countrylst = from c in db.Country
                             select c.country_name;
            return Ok(Countrylst);
        }
        [Route("Add")]
        public IActionResult Post(CustomEmployee model)
        {
            var countryId = from c in db.Country
                            where c.country_name == model.country_name
                            select c.id;
            if (model.id != 0)
            {

                Employee employee = db.Employees.Where(x => x.id == model.id).FirstOrDefault();
                employee.name = model.name;
                employee.job_title = model.job_title;
                employee.gender = model.gender;
                employee.email = model.email;
                employee.phone_no = model.phone_no;
                employee.address = model.address;
                employee.country_id = countryId.FirstOrDefault();
                db.SaveChanges();
                return Ok(2);
            }
            else
            {
                Employee employee = new Employee();
                employee.name = model.name;
                employee.job_title = model.job_title;
                employee.gender = model.gender;
                employee.email = model.email;
                employee.phone_no = model.phone_no;
                employee.address = model.address;
                employee.country_id = countryId.FirstOrDefault();
                db.Add(employee);
                db.SaveChanges();

                return Ok(1);
            }
            
        }
        [Route("{id}")]
        public IActionResult Delete(int id)
        {
            var employee = db.Employees.Find(id);
            db.Remove(employee);
            db.SaveChanges();
            return Ok();
        }
    }
}