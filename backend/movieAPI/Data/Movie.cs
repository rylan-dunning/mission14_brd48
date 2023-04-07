﻿using System;
using System.Collections.Generic;

namespace movieAPI.Data
{
    public partial class Movie
    {
        public int? movieId { get; set; }
        public string? category { get; set; }
        public string? title { get; set; }
        public int? year { get; set; }
        public string? director { get; set; }
        public string? rating { get; set; }
        public string? edited { get; set; }
        public string? lentTo { get; set; }
        public string? notes { get; set; }
    }
}
