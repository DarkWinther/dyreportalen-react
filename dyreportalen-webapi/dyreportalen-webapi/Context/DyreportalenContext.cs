using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace dyreportalen_webapi.Context
{
    public class DyreportalenContext : DbContext
    {
        public DbSet<Ad> Ads { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<AdType> AdTypes { get; set; }
        public DbSet<Race> Races { get; set; }

        public DyreportalenContext() : base("name=DefaultConnection")
        {

        }
    }
}