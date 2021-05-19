using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Repository;
using Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentListYehuditGluskinos
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAppServices();
            services.AddAutoMapper(c => c.AddProfile<AutoMapping>(), typeof(Startup));
            services.AddMvc();
            //.SetCompatibilityVersion(CompatibilityVersion.Version_2_1); 
            //services.AddCors(options =>
            //{
            //    options.AddPolicy(name: "angular",
            //                      builder =>
            //                      {
            //                          builder.WithOrigins("http://localhost:4200");
            //                          builder.WithHeaders("*");
            //                          builder.WithMethods("*");
            //                      });
            //});

            //services.AddCors(options =>
            //{
            //    options.AddPolicy("_myAllowSpecificOrigins",
            //    builder =>
            //    {
            //        builder.WithOrigins("http://localhost:52795",
            //                            "http://localhost:4200"
            //                            )
            //                            .AllowAnyHeader()
            //                            .AllowAnyMethod();
            //    });
            //});
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapGet("/", async context =>
                {
                    await context.Response.WriteAsync("Hello World!");
                });
            });

            app.UseCors(x => x
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader());

            app.UseHttpsRedirection();
        }
    }
}
