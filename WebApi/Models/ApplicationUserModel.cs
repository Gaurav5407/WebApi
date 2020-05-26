using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class ApplicationUserModel
    {
        public string name { get; set; }
        public string email { get; set; }
        public string password { get; set; }

    }
}
