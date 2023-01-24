using System.Threading.Tasks;
using dndvtt.api.Hubs.Clients;
using dndvtt.api.Models.Chat;
using Microsoft.AspNetCore.SignalR;

namespace dndvtt.api.Hubs
{
    public class TtmHub : Hub<ITtmClient>
    {

    }
}