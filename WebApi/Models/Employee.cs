using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Employee
    {
        [Key]
        public int id { get; set; }
        [Column(TypeName ="varchar(50)")]
        public string name { get; set; }
        [Column(TypeName ="varchar(50)")]
        public string email { get; set; }
        [Column(TypeName ="nvarchar(100)")]
        public string job_title { get; set; }
        [Column(TypeName ="int")]
        public int country_id { get; set; }
        [Column(TypeName ="varchar(10)")]
        public string gender { get; set; }
        [Column(TypeName ="varchar(15)")]
        public string phone_no { get; set; }
        [Column(TypeName ="varchar(150)")]
        public string address { get; set; }
        [ForeignKey("country_id")]
        public Country Country { get; set; }

    }
}
