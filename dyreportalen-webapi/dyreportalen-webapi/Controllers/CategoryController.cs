using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using dyreportalen_webapi.Context;
using System.Data.Entity.Validation;
using System.Web.Http.Cors;

namespace dyreportalen_webapi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CategoryController : ApiController
    {
        public IHttpActionResult GetAll()
        {
            using (DyreportalenContext context = new DyreportalenContext())
            {
                List<Category> categories = context.Categories.ToList();

                if (categories.Count == 0)
                {
                    return NotFound();
                }

                return Ok(categories.ToList());
            }
        }
        
        public IHttpActionResult GetWithId(int id)
        {
            using (DyreportalenContext context = new DyreportalenContext())
            {
                Category category =
                    (from f in context.Categories
                     where f.Category_id == id
                     select f).SingleOrDefault();

                if (category == null)
                {
                    return NotFound();
                }

                return Ok(category);
            }
        }
        
    }
}

