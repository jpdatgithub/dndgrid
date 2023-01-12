using System.Threading.Tasks;
using Dndvtt.Api.Models;

namespace Dndvtt.Api.Hubs.Clients
{
    public interface IChatClient
    {
        Task ReceiveMessage(ChatMessage message);
    }
}