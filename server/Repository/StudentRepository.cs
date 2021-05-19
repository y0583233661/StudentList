using Repository.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Text;
using System.Web.Helpers;
using System.IO;

namespace Repository
{
    class StudentRepository:IStudentRepository
    {
        List<StudentModel> studentList;
        const string PATH = @"../Repository/studentList.json";
        public StudentRepository()
        {
            StreamReader reader = new StreamReader(PATH);
            string json = reader.ReadToEnd();
            studentList = JsonSerializer.Deserialize<List<StudentModel>>(json);
        }
        public List<StudentModel> GetAll()
        {
            return GetStudentsList();
        }

        public List<StudentModel> GetByIdentity(string identity)
        {
            return GetStudentsList().Where(s => s.Identity.Contains(identity)).ToList();
        }

        public List<StudentModel> GetByName(string name)
        {
            return GetStudentsList().Where(s => s.FirstName.Contains(name) || s.LastName.Contains(name) ).ToList();
        }

        private List<StudentModel> GetStudentsList()
        {
            return studentList;

        }
    }
}
