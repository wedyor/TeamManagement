using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamManagement.Models;

namespace TeamManagement.Repositories
{
    public interface ITeamRepository
    {
        Task<IEnumerable<Employee>> Get();
        Task<Employee> Get(int id);
        Task<Employee> Create(Employee employee);
        Task Update(Employee employee);
        Task Delete(int id);
    }
}
