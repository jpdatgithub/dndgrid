namespace dndvtt.api.Models.TabViewer
{
    public class TabViewerModel<T>
    {
        public List<T> tabs { get; set; }

        public string tvId { get; set; }

        public TabViewerModel(List<T> tabs, string id)
        {
            this.tabs = tabs;
            this.tvId = id;
        }
    }
}
