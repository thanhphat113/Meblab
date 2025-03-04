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
    [Route("dich-vu")]
    public class PriceController : Controller
    {
        private readonly ILogger<PriceController> _logger;

        public PriceController(ILogger<PriceController> logger)
        {
            _logger = logger;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            var services = new List<ServiceDTO>([
                new ServiceDTO{
                    ServiceName = "abc",
                    ServiceGroup = "abc",
                    ServiceUnit = "abc"
                },
                new ServiceDTO{
                    ServiceName = "abc",
                    ServiceGroup = "abc",
                    ServiceUnit = "abc"
                },
                new ServiceDTO{
                    ServiceName = "abc",
                    ServiceGroup = "abc",
                    ServiceUnit = "abc"
                },
                new ServiceDTO{
                    ServiceName = "abc",
                    ServiceGroup = "abc",
                    ServiceUnit = "abc"
                },
            ]);
            return View(services);
        }

        [HttpGet("error")]

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View("Error!");
        }
    }
}