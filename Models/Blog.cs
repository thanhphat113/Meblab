using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Medlab.Models
{
    public class Blog
    {
        public string Category { get; set; }
        public int Id { get; set; }
        public string Content { get; set; }
        public string Title { get; set; }
    }
}