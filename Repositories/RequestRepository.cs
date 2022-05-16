using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamManagement.DataLayer;
using TeamManagement.Models;

namespace TeamManagement.Repositories
{
    public class RequestRepository : IRequestRepository
    {
        private readonly TeamContext _context;
        public RequestRepository(TeamContext context)
        {
            this._context = context;
        }
        public async Task<Request> Create(Request request)
        {
            _context.Requests.Add(request);
            await _context.SaveChangesAsync();

            return request;
        }

        public async Task Delete(int id)
        {
            var requestToDelete = await _context.Users.FindAsync(id);
            _context.Users.Remove(requestToDelete);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Request>> Get()
        {
            return await _context.Requests.ToListAsync();
        }

        public async Task<Request> Get(int id)
        {
            return await _context.Requests.FindAsync(id);
        }

        public async Task<Request> GetByEmail(string email)
        {
            return await _context.Requests.FindAsync(email);
        }

        public async Task Update(Request request)
        {
            _context.Entry(request).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

   
    }
}
