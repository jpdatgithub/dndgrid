namespace dndvtt.api.Models.Board
{
    public class CellModel
    {
        public bool occupied;
        public string? tokenPicId;

        public CellModel(bool occupied, string tokenPicId) 
        { 
            this.occupied = occupied;
            this.tokenPicId = tokenPicId;
        }

        public CellModel() 
        { 
            this.occupied=false;
            this.tokenPicId=null;
        }
    }
}
