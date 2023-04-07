using dndvtt.api.Models.Chat;

namespace dndvtt.api.Services.Facades.Interfaces
{
    public interface IHubFacade
    {
        public Task SendMessageToAll(ChatMessage message);
    }
}
