using System;
using System.Collections.Generic;
using System.Text;
using AutoMapper;
using Repository.Models;
using ViewModels;

namespace Services
{
   
    public class AutoMapping : Profile
    {
        public AutoMapping()
        {
            CreateMap<StudentModel, StudentVM>();
        }
    }
}
