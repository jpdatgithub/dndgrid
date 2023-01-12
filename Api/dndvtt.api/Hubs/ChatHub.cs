using System.Threading.Tasks;
using Dndvtt.Api.Hubs.Clients;
using Dndvtt.Api.Models;
using Microsoft.AspNetCore.SignalR;

namespace Dndvtt.Api.Hubs
{
    public class ChatHub : Hub<IChatClient>
    {
        
    }
}