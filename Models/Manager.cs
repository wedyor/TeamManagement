using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TeamManagement.Models
{
    public class Manager
    {
        [Column("ManagerId")]
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Required]
        public int ManagerId { get; set; }

        [Column("FirstName")]
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

        [ForeignKey("RequestId")]
        public virtual Request Request { get; set; }
    }
}
