using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamManagement.Models;

namespace TeamManagement.Repositories
{
    public interface IRequestRepository
    {
        Task<IEnumerable<Request>> Get();
        Task<Request> Get(int id);
        Task<Request> GetByEmail(string email);
        Task<Request> Create(Request request);
        Task Update(Request request);
        Task Delete(int id);

    }
}
