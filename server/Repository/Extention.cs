using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using ViewModels;

namespace Repository
{
    public static class Extention
    {
        public static IServiceCollection AddRepository(this IServiceCollection services)
        {
            services.AddSingleton<IStudentRepository, StudentRepository>();
            return services;
        }
    }
}
