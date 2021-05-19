using System.Collections.Generic;
using ViewModels;

namespace Services
{
    public interface IStudentService
    {
        List<StudentVM> GetAll();
        List<StudentVM> GetByIdentity(string identity);
        List<StudentVM> GetByName(string name);
    }
}