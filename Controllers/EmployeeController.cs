using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamManagement.Models;
using TeamManagement.Repositories;

namespace TeamManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly ITeamRepository _teamRepository;

        public EmployeeController(ITeamRepository teamRepository)
        {
            _teamRepository = teamRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<Employee>> GetEmployees()
        {
            return await _teamRepository.Get();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployees(int id)
        {
            return await _teamRepository.Get(id);
        }

        [HttpPost]
        public async Task<ActionResult<Employee>> PostEmployees([FromBody] Employee employee)
        {
            var newEmployee = await _teamRepository.Create(employee);
            return CreatedAtAction(nameof(GetEmployees), new { id = newEmployee.EmployeeId }, newEmployee);
        }

        [HttpPut]
        public async Task<ActionResult> PutBooks(int id, [FromBody] Employee employee)
        {
            if (id != employee.EmployeeId)
            {
                return BadRequest();
            }

            await _teamRepository.Update(employee);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var employeeToDelete = await _teamRepository.Get(id);
            if (employeeToDelete == null)
                return NotFound();

            await _teamRepository.Delete(employeeToDelete.EmployeeId);
            return NoContent();
        }
    }
}
