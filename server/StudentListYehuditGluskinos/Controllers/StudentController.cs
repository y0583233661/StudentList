using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ViewModels;

namespace StudentListYehuditGluskinos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        IStudentService service;
        public StudentController(IStudentService service)
        {
            this.service = service;
        }
        [HttpGet]
        public List<StudentVM> GetAll()
        {
            return service.GetAll();
        }
        [HttpGet("name/{name}")]
        public List<StudentVM> GetByName(string name)
        {
            return service.GetByName(name);
        }
        [HttpGet("identity/{identity}")]
        public List<StudentVM> GetByIdentity(string identity)
        {
            return service.GetByIdentity(identity);
        }
    }
}
