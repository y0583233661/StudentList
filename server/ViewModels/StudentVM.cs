using System;
using System.Collections.Generic;
using System.Text;

namespace ViewModels
{
    public class StudentVM
    {    public int ID { get; set; }
        public string Identity { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime BirthDate { get; set; }
        public Gender gender { get; set; }
        public DateTime JoinDate { get; set; }
    }
    public enum Gender
    {
        Male,
        Female
    }
    
}
