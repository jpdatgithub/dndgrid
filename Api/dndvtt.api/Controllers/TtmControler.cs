using Microsoft.AspNetCore.Mvc;
using dndvtt.api.Models.Chat;
using dndvtt.api.Models;
using dndvtt.api.Services.Facades.Interfaces;
using dndvtt.api.Services.Hubs.Clients;
using dndvtt.api.Services.Hubs;
using Microsoft.AspNetCore.SignalR;

namespace dndvtt.api.Controllers
{
    [ApiController]
    [Route("ttm")]
    public class TtmControler : ControllerBase
    {
        private readonly IHubContext<GameHub, IGameClient>? _ttmHub;

        public TtmControler(IHubContext<GameHub, IGameClient> ttmHub)
        {
            _ttmHub = ttmHub;
        }

        [HttpPost("messages")]
        public async Task Post(ChatMessage message)
        {
            // run some logic...

            await _ttmHub.SendMessageToAll(message);
        }


        [HttpPost("login")]
        public async Task<IActionResult> Login(CredentialsModel credentials)
        {
            return Ok(new { token = "test123" });
        }
    }
}