using Microsoft.Extensions.DependencyInjection;
using Repository;
using System;
using System.Collections.Generic;
using System.Text;

namespace Services
{
    public static class Extention
    {
        public static IServiceCollection AddAppServices(this IServiceCollection services)
        {
            services.AddRepository();
            services.AddSingleton<IStudentService, StudentService>();
            return services;
        }
    }
}
