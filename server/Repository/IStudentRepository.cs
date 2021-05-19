using Repository.Models;
using System.Collections.Generic;

namespace Repository
{
    public interface IStudentRepository
    {
        List<StudentModel> GetAll();
        List<StudentModel> GetByIdentity(string identity);
        List<StudentModel> GetByName(string name);

    }
}