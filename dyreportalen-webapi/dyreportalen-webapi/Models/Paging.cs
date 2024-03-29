﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace dyreportalen_webapi.Models
{
    public class Paging
    {
            const int maxPageSize = 20;

            public int pageNumber { get; set; } = 1;

            public int _pageSize { get; set; } = 2;

            public int pageSize
            {

                get { return _pageSize; }
                set
                {
                    _pageSize = (value > maxPageSize) ? maxPageSize : value;
                }
            }
        
    }

}