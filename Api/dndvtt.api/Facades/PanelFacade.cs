using dndvtt.api.Facades.Interfaces;
using dndvtt.api.Models.Panel;

namespace dndvtt.api.Facades
{
    public class PanelFacade : IPanelFacade
    {
        public PanelFacade()
        {

        }

        public PanelModel InitPanel()
        {
            return new PanelModel();
        }
    }
}
