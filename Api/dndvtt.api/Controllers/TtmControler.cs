using Microsoft.AspNetCore.Mvc;
using dndvtt.api.Models.Chat;
using dndvtt.api.Models;
using dndvtt.api.Services.Facades.Interfaces;

namespace dndvtt.api.Controllers
{
    [ApiController]
    [Route("ttm")]
    public class TtmControler : ControllerBase
    {
        private IGameFacade _ttmFacade;

        public TtmControler(IGameFacade ttmFacade)
        {
            _ttmFacade = ttmFacade;
        }

        [HttpPost("messages")]
        public async Task Post(ChatMessage message)
        {
            // run some logic...

            await _ttmFacade.SendMessageToAll(message);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(CredentialsModel credentials)
        {
            return Ok(new { token = "test123" });
        }
    }
}