using System;
using System.Collections.Generic;
using System.Text;

namespace Repository.Models
{
    public class StudentModel
    {
        public int ID { get; set; }
        public string Identity { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string BirthDate { get; set; }
        public Gender gender { get; set; }
        public string JoinDate { get; set; }
    }

    public enum Gender
    {
        Male,
        Female
    }
}
