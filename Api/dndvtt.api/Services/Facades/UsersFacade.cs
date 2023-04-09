using dndvtt.api.Services.Database.Interfaces;
using LiteDB;
using powerfantasy.api.Models.UserData;

namespace powerfantasy.api.Services.Facades
{
    public class UsersFacade
    {
        private readonly LiteDatabase _database;

        public UsersFacade(ILiteDbConnector liteDbConnector)
        {
            _database = liteDbConnector.getDatabase();
        }

        public LiteCollection<AccessToken> Tokens => (LiteCollection<AccessToken>)_database.GetCollection<AccessToken>("tokens");
        public LiteCollection<User> Users => (LiteCollection<User>)_database.GetCollection<User>("users");

        public string? AuthenticateUser(CredentialsModel credentials)
        {
            var user = Users.FindOne(u => u.credentials.username == credentials.username);
            
            if (user == null)
            {
                return null;
            }

            if (user.credentials.password == credentials.password)
            {
                return AssignToken(user.Id.ToString());
            }
            else
            {
                return null;
            }
        }

        public string AssignToken(string userId)
        {
            var token = Tokens.FindOne(t => t.UserId == userId);

            if (token != null)
            {
                Tokens.Delete(token.Id);
            }

            var newToken = new AccessToken
            {
                Id = Guid.NewGuid(),
                UserId = userId,
                ExpirationDate = DateTime.UtcNow.AddHours(24)
            };

            Tokens.Insert(newToken);

            return newToken.Id.ToString();
        }
    }
}
