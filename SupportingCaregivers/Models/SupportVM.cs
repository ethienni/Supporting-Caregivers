using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace SupportingCaregivers.Models {
  public class SupportVM {

    public IEnumerable<SupportVM> Supports { get; set; }

    [Required]
    [StringLength(50, ErrorMessage = "Cannot exceed 50 characters. ")]
    public String Caregiver { get; set; }
    [Required]
    [StringLength(50, ErrorMessage = "Cannot exceed 50 characters. ")]
    public String Patient { get; set; }
    [Required]
    [StringLength(50, ErrorMessage = "Cannot exceed 50 characters. ")]
    public String Behaviour { get; set; }
    [Required]
    [StringLength(50, ErrorMessage = "Cannot exceed 50 characters. ")]
    public String InterventionDone { get; set; }
    [Required]
    [Range(1, 10, ErrorMessage = "Can only be between 1 and 10")]
    public int SuccessRating { get; set; }
    [Required]
    public DateTime DateTime { get; set; }
    [StringLength(50, ErrorMessage = "Cannot exceed 50 characters. ")]
    public String Location { get; set; }
    [StringLength(50, ErrorMessage = "Cannot exceed 250 characters. ")]
    public String Comments { get; set; }
  }
  
}
