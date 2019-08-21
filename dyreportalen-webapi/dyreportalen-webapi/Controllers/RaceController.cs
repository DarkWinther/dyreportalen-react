using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using dyreportalen_webapi.Context;
using System.Data.Entity.Validation;
namespace dyreportalen_webapi.Controllers
{
    public class RaceController : ApiController
    {
        public IHttpActionResult GetAll()
        {
            using (DyreportalenContext context = new DyreportalenContext())
            {
                var race = (from c in context.Races select new { c.Race_id, c.RaceName, c.Category.Category_Name }).ToList();

                if (race.Count == 0)
                {
                    return NotFound();
                }

                return Ok(race);
            }
        }

        public IHttpActionResult GetWithId(int id)
        {
            using (DyreportalenContext context = new DyreportalenContext())
            { 

                var race = context.Races
                                .Where(x => x.Race_id == id)
                                .Select(x => new { x.Race_id, x.RaceName, x.Category.Category_Name })
                                .SingleOrDefault();

            if (race == null)
                {
                    return NotFound();
                }

                return Ok(race);
            }
        }

        public IHttpActionResult GetWithCategoryId(int categoryId)
        {
            using (DyreportalenContext context = new DyreportalenContext())
            {

                var race = context.Races
                                .Where(x => x.Category.Category_id == categoryId)
                                .Select(x => new { x.Race_id, x.RaceName, x.Category.Category_Name })
                                .ToList();


                if (race.Count == 0)
                {
                    return NotFound();
                }

                return Ok(race.ToList());
            }
        }

    }
}