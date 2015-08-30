using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CRUDwFluentData.Startup))]
namespace CRUDwFluentData
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
