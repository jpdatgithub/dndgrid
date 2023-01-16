using dndvtt.api.Hubs.Clients;
using dndvtt.api.Hubs;
using dndvtt.api.Models.Game;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using dndvtt.api.Facades;

namespace dndvtt.api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {
        private readonly IHubContext<GameHub, IGameClient> _gameHub;
        private IGameFacade _gameFacade;

        public GameController(IHubContext<GameHub, IGameClient> gameHub, IGameFacade gameFacade)
        {
            _gameHub = gameHub;
            _gameFacade = gameFacade;
        }

        [HttpGet("board")]
        public async Task Get()
        {
            // give the client that asked the latest state of the board

            
        }
    }
}
