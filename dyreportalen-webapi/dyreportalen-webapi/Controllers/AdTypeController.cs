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
    public class AdTypeController : ApiController
    {
        public IHttpActionResult GetAll()
        {
            using (DyreportalenContext context = new DyreportalenContext())
            {
                List<AdType> adType = context.AdTypes.ToList();

                if (adType.Count == 0)
                {
                    return NotFound();
                }

                return Ok(adType.ToList());
            }
        }

        public IHttpActionResult GetWithId(int id)
        {
            using (DyreportalenContext context = new DyreportalenContext())
            {
                AdType adType =
                    (from f in context.AdTypes
                     where f.AdType_id == id
                     select f).SingleOrDefault();

                if (adType == null)
                {
                    return NotFound();
                }

                return Ok(adType);
            }
        }

    }
}