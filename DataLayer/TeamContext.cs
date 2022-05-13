using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TeamManagement.Models;

namespace TeamManagement.DataLayer
{
    public class TeamContext: DbContext
    {
        public TeamContext(DbContextOptions<TeamContext> options) : base(options)
        {
        }
        public DbSet<Request> Requests { get; set; }
        public DbSet<Manager> Managers { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Administrator> Administrators { get; set; }

    }

}
