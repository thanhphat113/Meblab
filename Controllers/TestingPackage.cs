using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Medlab.Controllers
{
    [Route("goi-xet-nghiem-tong-quat")]
    public class TestingPackage : Controller
    {
        private readonly ILogger<TestingPackage> _logger;

        public TestingPackage(ILogger<TestingPackage> logger)
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