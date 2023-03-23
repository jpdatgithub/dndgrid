using Microsoft.AspNetCore.Mvc;
using dndvtt.api.Models.Chat;
using dndvtt.api.Services.Facades.Interfaces;

namespace dndvtt.api.Controllers
{
    [ApiController]
    [Route("ttm")]
    public class TtmControler : ControllerBase
    {
        private ITtmFacade _ttmFacade;

        public TtmControler(ITtmFacade ttmFacade)
        {
            _ttmFacade = ttmFacade;
        }

        [HttpPost("messages")]
        public async Task Post(ChatMessage message)
        {
            // run some logic...

            await _ttmFacade.SendMessageToAll(message);
        }
    }
}