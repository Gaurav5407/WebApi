using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Query.Internal;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationUserController : ControllerBase
    {
        private readonly WebApiDbContext db;
        public ApplicationUserController(WebApiDbContext db)
        {
            this.db = db;
        }
        [Route("Register")]
        public IActionResult Post(ApplicationUserModel model)
        {
          
                var user = db.applicationUsers.Where(x => x.name == model.name).FirstOrDefault();

                if (user == null)
                {
                    ApplicationUser applicationUser = new ApplicationUser();
                    applicationUser.name = model.name;
                    applicationUser.email = model.email;
                    applicationUser.password = model.password;
                    applicationUser.created_date = DateTime.Now;
                    applicationUser.updated_date = DateTime.Now;
                    db.Add(applicationUser);
                    db.SaveChanges();
                    return Ok(true);
                }
                else
                    return Ok(false);
           
        }
        [Route("Login")]
        [HttpPost]
        public IActionResult Login (ApplicationUserModel model)
        {
            var userExist = db.applicationUsers.Where(x => x.email == model.email && x.password == model.password).FirstOrDefault();
            if(userExist == null)
            {
                return Ok(false);
            }
            else
            {
                return Ok(true);
            }
        }
        [Route("ForgotPassword")]
        [HttpPost]
        public IActionResult Forgot(ApplicationUserModel model)
        {
            int portNumber = 587;
            bool enableSSL = true;
            string emailFromAddress = "rangapariyagaurav100@gmail.com"; //Sender Email Address  
            string emailPassword = "gaurav@125396"; //Sender Password  
            string smtpAddress = "smtp.gmail.com";
            string emailToAddress = "rangapariyagaurav100@gmail.com"; //Receiver Email Address  
            string subject = "Hello";
            var password = db.applicationUsers.Where(x => x.email == model.email).FirstOrDefault();
            if(password == null)
            {
                return Ok(false);
            }
            string body = "Email : "+emailToAddress+"\n"
                            +"password : "+password.password;

            using (MailMessage mail = new MailMessage())
            {
                mail.From = new MailAddress(emailFromAddress);
                mail.To.Add(emailToAddress);
                mail.Subject = subject;
                mail.Body = body;
                mail.IsBodyHtml = true;
                //mail.Attachments.Add(new Attachment("D:\\TestFile.txt"));//--Uncomment this to send any attachment  
                using (SmtpClient smtp = new SmtpClient(smtpAddress, portNumber))
                {
                    smtp.Credentials = new NetworkCredential(emailFromAddress, emailPassword);
                    smtp.EnableSsl = enableSSL;
                    smtp.Send(mail);
                }
            }
            return Ok(true);

        }
    }
}