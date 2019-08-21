using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dyreportalen_webapi
{
    public class Category
    {
        [Key]
        public int Category_id { get; set; }
        public string Category_Name { get; set; }
    }

}