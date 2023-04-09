using LiteDB;
using dndvtt.api.Services.Database.Interfaces;
using powerfantasy.api.Models.UserData;

namespace dndvtt.api.Services.Database
{
    public class LiteDbConnector : ILiteDbConnector
    {
        private readonly LiteDatabase _database;

        public LiteDbConnector(string connectionString)
        {
            _database = new LiteDatabase(connectionString);
        }

        public LiteDatabase getDatabase()
        {
            return _database;
        }
    }
}
