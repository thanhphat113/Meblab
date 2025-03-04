using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Medlab.Controllers
{
    [Route("{unit}/admin/danh-sach-benh-nhan")]
    public class UnitAdmin : Controller
    {
        private readonly ILogger<UnitAdmin> _logger;

        public UnitAdmin(ILogger<UnitAdmin> logger)
        {
            _logger = logger;
        }


        public IActionResult Index()
        {
            return View();
        }
    }
}