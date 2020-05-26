using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class ApplicationUser
    {
        [Key]
        public int id { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string name { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string email { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string password { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime created_date { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime updated_date { get; set; }
    }
}
