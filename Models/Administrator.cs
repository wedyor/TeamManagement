using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TeamManagement.Models
{
    public class Administrator
    {
        [Column("AdminId")]
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Required]
        public int AdminId { get; set; }

        [Column("Firstname")]
        [Required]
        [StringLength(50)]
        public string FirstName { get; set; }

        [Column("LastName")]
        [Required]
        [StringLength(50)]
        public string LastName { get; set; }


        [Column("Email")]
        [Required]
        [StringLength(50)]
        public string Email { get; set; }


        [Column("Password")]
        [Required]
        [StringLength(50)]
        public string Password { get; set; }
    }
}
