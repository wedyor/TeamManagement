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
    public class RequestsController : ControllerBase
    {
        private readonly IRequestRepository _requestRepository;

        public RequestsController(IRequestRepository requestRepository)
        {
            _requestRepository = requestRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<Request>> GetRequests()
        {
            return await _requestRepository.Get();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Request>> GetRequests(int id)
        {
            return await _requestRepository.Get(id);
        }

        [HttpPost]
        public async Task<ActionResult<Request>> PostRequest([FromBody] Request request)
        {
            var newRequest = await _requestRepository.Create(request);
            return CreatedAtAction(nameof(GetRequests), new { id = newRequest.RequestId }, newRequest);
        }

        [HttpPut]
        public async Task<ActionResult> PutRequests(int id, [FromBody] Request request)
        {
            if (id != request.RequestId)
            {
                return BadRequest();
            }

            await _requestRepository.Update(request);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var requestToDelete = await _requestRepository.Get(id);
            if (requestToDelete == null)
                return NotFound();

            await _requestRepository.Delete(requestToDelete.RequestId);
            return NoContent();
        }

    }
}

