using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SupportingCaregivers.Models;

namespace SupportingCaregivers.Controllers {
  public class HomeController : Controller {
    public IActionResult Index() {
      return View();
    }
    public IActionResult Create() {
      return View();
    }

    public IActionResult Edit() {
      return View();
    }
    public IActionResult Delete() {
      return View();
    }

    public IActionResult Privacy() {
      return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error() {
      return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
  }
}
