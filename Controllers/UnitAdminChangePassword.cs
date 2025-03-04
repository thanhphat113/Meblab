using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Medlab.DTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Medlab.Controllers
{
    [Route("{unit}/admin/doi-mat-khau")]
    public class UnitAdminChangePassword : Controller
    {
        private readonly ILogger<UnitAdminChangePassword> _logger;

        public UnitAdminChangePassword(ILogger<UnitAdminChangePassword> logger)
        {
            _logger = logger;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("error")]
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View("Error!");
        }
    }
}