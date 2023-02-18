namespace dndvtt.api.Models.TabViewer
{
    public class TabViewerModel<T>
    {
        public List<T> tabs { get; set; }
        public bool shadowTopLong { get; set; }
        public bool shadowTopShort { get; set; }

        public bool shadowBottomLong { get; set; }

        public bool shadowBottomShort { get; set; }

        public bool shadowRightLong { get; set; }

        public bool shadowRightShort { get; set; }

        public bool shadowLeftLong { get; set; }

        public bool shadowLeftShort { get; set; }

        public string id { get; set; }

        public TabViewerModel(List<T> tabs, List<bool> shadows, string id)
        {
            this.tabs = tabs;
            this.id = id;
            shadowTopLong = shadows[0];
            shadowTopShort = shadows[1];
            shadowBottomLong = shadows[2];
            shadowBottomShort = shadows[3];
            shadowRightLong = shadows[4];
            shadowRightShort = shadows[5];
            shadowLeftLong = shadows[6];
            shadowLeftShort = shadows[7];
        }
    }
}
