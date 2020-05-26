using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Country
    {
        [Key]
        public int id { get; set; }
        [Column(TypeName ="varchar(50)")]
        public  string country_name { get; set; }

    }
}
