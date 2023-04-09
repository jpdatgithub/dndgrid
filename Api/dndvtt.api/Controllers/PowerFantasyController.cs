using Microsoft.AspNetCore.Mvc;
using dndvtt.api.Models.Chat;
using dndvtt.api.Services.Facades.Interfaces;
using dndvtt.api.Services.Hubs.Clients;
using dndvtt.api.Services.Hubs;
using Microsoft.AspNetCore.SignalR;
using dndvtt.api.Services.Facades;
using powerfantasy.api.Models.UserData;
using dndvtt.api.Services.Database;
using powerfantasy.api.Services.Facades;

namespace dndvtt.api.Controllers
{
    [ApiController]
    [Route("ttm")]
    public class PowerFantasyController : ControllerBase
    {
        private HubFacade _hubFacade;
        private UsersFacade _usersFacade;

        public PowerFantasyController(HubFacade hubFacade, UsersFacade usersFacade)
        {
            _hubFacade = hubFacade;
            _usersFacade = usersFacade;
        }

        [HttpPost("messages")]
        public async Task Post(ChatMessage message)
        {
            // run some logic...
            await _hubFacade.SendMessageToAll(message);
        }


        //[HttpPost("login")]
        //public async Task<IActionResult> Login(CredentialsModel credentials)
        //{
        //    return Ok(new { token = "test123" });
        //}

        [HttpPost("login")]
        public ActionResult<string> Login(CredentialsModel credentials)
        {
            var auth = _usersFacade.AuthenticateUser(credentials);
            // Authenticate user and retrieve user ID
            if (auth != null)
            {
                return Ok(new { token = auth });
            }
            else
            {
                // Authentication failed
                return Unauthorized(new { token = "" });
            }
        }

    }
}