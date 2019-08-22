using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace dyreportalen_webapi
{
    public class Ad
    {
        [Key]
        public int Ad_id { get; set; }
        public DateTime Created { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public string City { get; set; }
        public string ImageUrl { get; set; }
        public decimal Price { get; set; }
        public Category Category{ get; set; } 
        public Race Race { get; set; }
        public AdType AdType { get; set; }
    }

    public class AdViewModel
    {
        public int Ad_id { get; set; }
        public DateTime Created { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public string City { get; set; }
        public string ImageUrl { get; set; }
        public Category Category { get; set; }
        public Race Race { get; set; }
        public AdType AdType { get; set; }

        public AdViewModel() { }

        public AdViewModel(Ad ad)
        {
            Ad_id = ad.Ad_id;
            Created = ad.Created;
            Title = ad.Title;
            Text = ad.Text;
            City = ad.City;
            ImageUrl = ad.ImageUrl;

        }
    }
}