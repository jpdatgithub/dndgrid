using LiteDB;

namespace dndvtt.api.Services.Database.Interfaces
{
    public interface ILiteDbConnector
    {
        public LiteDatabase getDatabase();
    }
}
