using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Medlab.Controllers
{
    [Route("goi-xet-nghiem-tien-hon-nhan")]
    public class TestingPackageTienHonNhan : Controller
    {
        private readonly ILogger<TestingPackageTienHonNhan> _logger;

        public TestingPackageTienHonNhan(ILogger<TestingPackageTienHonNhan> logger)
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