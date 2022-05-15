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
        public DbSet<User> Users { get; set; }
        public DbSet<Request> Requests { get; set; }


    }

}
