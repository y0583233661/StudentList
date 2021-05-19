using AutoMapper;
using Repository;
using Repository.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ViewModels;

namespace Services
{
    class StudentService: IStudentService
    {
        IStudentRepository repository;
        IMapper mapper;
        public StudentService(IStudentRepository repository, IMapper mapper)
        {
            this.repository = repository;
            this.mapper = mapper;
        }

        public List<StudentVM> GetAll()
        {
            return repository.GetAll().Select(s => M2VM(s)).ToList();
        }

        public List<StudentVM> GetByIdentity(string identity)
        {
            return repository.GetByIdentity(identity).Select(s => M2VM(s)).ToList();
        }

        public List<StudentVM> GetByName(string name)
        {
            return repository.GetByName(name).Select(s => M2VM(s)).ToList();
        }

        private StudentVM M2VM(StudentModel s)
        {
            return mapper.Map<StudentVM>(s);
        }
    }
}
