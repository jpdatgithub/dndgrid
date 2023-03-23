using dndvtt.api.Models.Chat;

namespace dndvtt.api.Services.Facades.Interfaces
{
    public interface ITtmFacade
    {
        public Task SendMessageToAll(ChatMessage message);
    }
}
