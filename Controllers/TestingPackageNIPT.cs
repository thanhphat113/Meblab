using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Medlab.Controllers
{
    [Route("goi-xet-nghiem-nipt")]
    public class TestingPackageNIPT : Controller
    {
        private readonly ILogger<TestingPackageNIPT> _logger;

        public TestingPackageNIPT(ILogger<TestingPackageNIPT> logger)
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