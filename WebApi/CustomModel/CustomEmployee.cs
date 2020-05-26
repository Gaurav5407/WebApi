using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.CustomModel
{
    public class CustomEmployee
    {
        public int id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string job_title { get; set; }

        public string country_name { get; set; }
        public string gender { get; set; }
        public string phone_no { get; set; }
        public string address { get; set; }
    }
}
