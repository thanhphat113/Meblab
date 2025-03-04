using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Medlab.Controllers
{
    [Route("admin")]
    public class AdminController : Controller
    {
        private readonly ILogger<AdminController> _logger;

        public AdminController(ILogger<AdminController> logger)
        {
            _logger = logger;
        }

        [HttpGet("blog")]
        public IActionResult Blog()
        {
            // var blogs = 
            return View("Blog");
        }

        [HttpGet("service")]
        public IActionResult Service()
        {
            return View("Service");
        }

        [HttpGet("booking")]
        public IActionResult Booking()
        {
            return View("Booking");
        }
    }
}