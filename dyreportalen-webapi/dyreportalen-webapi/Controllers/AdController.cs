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
    public class AdController : ApiController
    {
        public IHttpActionResult GetAll()
        {
            using (DyreportalenContext context = new DyreportalenContext())
            {
                var ads = context.Ads
                                .Select(x => new { x.Ad_id, x.Created, x.Title, x.Text, x.City, x.ImageUrl, x.Category.Category_Name, x.Race.RaceName, x.AdType.AdTypeName })
                                .ToList();

                if (ads.Count == 0)
                {
                    return NotFound();
                }

                return Ok(ads);
            }
        }

        public IHttpActionResult GetWithId(int id)
        {
            using (DyreportalenContext context = new DyreportalenContext())
            {
                var ads = context.Ads
                            .Where(x => x.Ad_id == id)
                            .Select(x => new { x.Ad_id, x.Created, x.Title, x.Text, x.City, x.ImageUrl, x.Category.Category_Name, x.Race.RaceName, x.AdType.AdTypeName })
                            .SingleOrDefault();

                if (ads == null)
                {
                    return NotFound();
                }

                return Ok(ads);
            }
        }

        public IHttpActionResult PostNew(Ad ad)
        {

            using (DyreportalenContext context = new DyreportalenContext())
            {
                context.Ads.Add(new Ad()
                {
                    Ad_id = ad.Ad_id,
                    Created = ad.Created,
                    Title = ad.Title,
                    Text = ad.Text,
                    City = ad.City,
                    ImageUrl = ad.ImageUrl,
                    Category = ad.Category,
                    Race = ad.Race,
                    AdType = ad.AdType              
                });
                return InjectTryCatch(context.SaveChanges);
            }
        }

        private IHttpActionResult InjectTryCatch(Func<int> saveChanges)
        {
            try
            {
                saveChanges();
            }
            catch (DbEntityValidationException e)
            {
                string vErrors = "";
                foreach (DbEntityValidationResult item in e.EntityValidationErrors)
                {
                    foreach (DbValidationError error in item.ValidationErrors)
                    {
                        vErrors += error.PropertyName + ": " + error.ErrorMessage + "\n";
                    }
                }
                return BadRequest("Error while applying changes to " + e.Source + ": " + e.Message + " EntityValidationError: " + vErrors);
            }
            return Ok();
        }
    }
}