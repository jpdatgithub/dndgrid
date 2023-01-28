using dndvtt.api.Facades.Interfaces;
using dndvtt.api.Models.Tools;

namespace dndvtt.api.Facades
{
    public class ToolsFacade : IToolsFacade
    {
        public ToolsFacade()
        {

        }
        public ToolsModel Init()
        {
            return new ToolsModel();
        }
    }
}