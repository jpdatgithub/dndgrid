using System.Threading.Tasks;
using dndvtt.api.Models.Chat;

namespace dndvtt.api.Hubs.Clients
{
    public interface ITtmClient
    {
        Task ReceiveMessage(ChatMessage message);
    }
}