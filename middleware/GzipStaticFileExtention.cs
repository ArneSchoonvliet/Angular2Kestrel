using Microsoft.AspNetCore.Builder;
using System;
using Microsoft.Extensions.Options;

namespace Angular2Kestrel
{
    public static class GzipStaticFileExtensions
    {
        public static IApplicationBuilder UseGzipStaticFiles(this IApplicationBuilder app)
        {
            if (app == null) throw new ArgumentNullException(nameof(app));
            return app.UseMiddleware<GzipStaticFileMiddleware>();
        }


        public static IApplicationBuilder UseGzipStaticFiles(this IApplicationBuilder app, StaticFileOptions options)
        {
            if (app == null) throw new ArgumentNullException(nameof(app));


            return app.UseMiddleware<GzipStaticFileMiddleware>(Options.Create(options));
        }
    }
}