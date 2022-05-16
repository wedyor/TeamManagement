using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamManagement.Models;

namespace TeamManagement.Repositories
{
    public interface ITeamRepository
    {
        Task<IEnumerable<User>> Get();
        Task<User> Get(int id);
        Task<User> GetByAddress(string email);
        Task<User> Create(User user);
        Task Update(User user);
        Task Delete(int id);


    }
}
