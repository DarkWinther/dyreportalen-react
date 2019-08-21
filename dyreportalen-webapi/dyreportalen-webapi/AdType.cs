using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace dyreportalen_webapi
{
    public class AdType
    {
        [Key]
        public int AdType_id { get; set; }
        public string AdTypeName { get; set; }
    }
}