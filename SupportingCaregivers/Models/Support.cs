using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SupportingCaregivers.Models {
  public class Support {
    public int Id { get; set; }
    public String Caregiver { get; set; }
    public String Patient { get; set; }
    public String Behaviour { get; set; }
    public String InterventionDone { get; set; }
    public String SuccessRating { get; set; }
    public DateTime DateTime { get; set; }
    public String Location { get; set; }
    public String Comments { get; set; }
  }
}
