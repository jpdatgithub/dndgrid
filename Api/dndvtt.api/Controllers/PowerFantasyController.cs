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
using System.Net;

namespace dndvtt.api.Controllers
{
    [ApiController]
    [Route("powerfantasy")]
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
                return Unauthorized();
            }
        }

        [HttpPost("register")]
        public ActionResult Register(CredentialsModel credentials)
        {
            var registered = _usersFacade.RegisterUser(credentials);

            if (registered)
            {
                return Ok();
            }
            else
            {
                return Conflict();
            }
        }

        [HttpPost("validatetoken")]
        public ActionResult<string> ValidateToken(ValidationRequest request)
        {
            if (_usersFacade.ValidateToken(request.token))
            {
                return Ok();
            }
            else
            {
                return Unauthorized();
            }
        }
    }
}