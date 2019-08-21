using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace dyreportalen_webapi
{
    public class Race

    {
        [Key]
        public int Race_id { get; set; }
        public string RaceName { get; set; }
        public Category Category { get; set; }
    }
}