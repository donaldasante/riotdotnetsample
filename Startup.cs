using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using VueCliMiddleware;

namespace RiotSample
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSpaStaticFiles(opt => opt.RootPath = "ClientApp/public");
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //app.UseHttpsRedirection();

            // NOTE: PRODUCTION uses webpack static files
            app.UseSpaStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();

                // NOTE: VueCliProxy is meant for developement and hot module reload
                // NOTE: SSR has not been tested
                // Production systems should only need the UseSpaStaticFiles() (above)
                // You could wrap this proxy in either
                // if (System.Diagnostics.Debugger.IsAttached)
                // or a preprocessor such as #if DEBUG
                endpoints.MapToVueCliProxy(
                    "{*path}",
                    new SpaOptions { SourcePath = "ClientApp" },
                    npmScript: (System.Diagnostics.Debugger.IsAttached) ? "start" : null,
                    regex: "Project is running at",
                    forceKill: true
                    );
            });
        }
    }
}
