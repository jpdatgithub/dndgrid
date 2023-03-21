using System.Threading.Tasks;
using dndvtt.api.Hubs;
using dndvtt.api.Hubs.Clients;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using dndvtt.api.Facades.Interfaces;
using dndvtt.api.Models.Chat;

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

        [HttpGet("init-panel")]
        public async Task GetInitPanel()
        {


        }

        [HttpPost("messages")]
        public async Task Post(ChatMessage message)
        {
            // run some logic...

            await _ttmFacade.SendMessageToAll(message);
        }
    }
}