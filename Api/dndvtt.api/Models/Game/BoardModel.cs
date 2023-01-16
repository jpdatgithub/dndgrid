namespace dndvtt.api.Models.Game
{
    public class BoardModel
    {
        List<CellModel>? _cells;
        int _cellsPerRow;
        public string? key { get; set; }

        public BoardModel(List<CellModel> cells, int cellsPerRow) { 
            key = DateTime.Now.ToString();
            _cells = cells;
            _cellsPerRow = cellsPerRow;
        }

        public BoardModel(int totalCells, int cellsPerRow) {
            key = DateTime.Now.ToString();
            _cells = new List<CellModel>();
            _cellsPerRow = cellsPerRow;

            for (int i = 0; i < totalCells; i++)
            {
                _cells.Add(new CellModel(" ", key, i));
            }
        }
    }
}
