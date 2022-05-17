using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamManagement.DataLayer;
using TeamManagement.Models;

namespace TeamManagement.Repositories
{
    public class TeamRepository : ITeamRepository
    {
        private readonly TeamContext _context;
        public TeamRepository(TeamContext context)
        {
            this._context = context;
        }
        public async Task<User> Create(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return user;
        }

        public async Task Delete(int id)
        {
            var userToDelete = await _context.Users.FindAsync(id);
            _context.Users.Remove(userToDelete);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<User>> Get()
        {
            return await _context.Users.ToListAsync();
        }

        public async Task<User> Get(int id)
        {
            return await _context.Users.FindAsync(id);
        }

        public async Task<User> GetByAddress(string email)
        {
            return await _context.Users.FirstOrDefaultAsync(e => e.email == email);
        }

        public async Task Update(User user)
        {
            _context.Entry(user).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
    }
}
