using dndvtt.api.Services.Database.Interfaces;
using LiteDB;
using powerfantasy.api.Models.UserData;
using System.Net;

namespace powerfantasy.api.Services.Facades
{
    public class UsersFacade
    {
        private readonly LiteDatabase _database;

        public UsersFacade(ILiteDbConnector liteDbConnector)
        {
            _database = liteDbConnector.getDatabase();

            if (!_database.CollectionExists("tokens"))
            {
                _database.GetCollection<AccessToken>("tokens").EnsureIndex(t => t.UserId);
            }

            if (!_database.CollectionExists("users"))
            {
                _database.GetCollection<User>("users").EnsureIndex(u => u.credentials.username, true);
            }
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
                return AssignToken(user.Id);
            }
            else
            {
                return null;
            }
        }

        public string AssignToken(Guid userId)
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

        public bool RegisterUser(CredentialsModel credentials)
        {
            var user = Users.FindOne(u => u.credentials.username == credentials.username);

            if (user != null)
            {
                return false;
            }
            else
            {
                Users.Insert(new User(credentials));
                return true;
            }
        }

        public bool ValidateToken(string token)
        {
            var found = Tokens.FindById(Guid.Parse(token));

            return (found != null);
        }

        public string? GetUsernameByToken(string token)
        {
            var accessToken = Tokens.FindById(Guid.Parse(token));

            if (accessToken == null)
            {
                return null;
            }

            var user = Users.FindById(accessToken.UserId);

            if (user == null)
            {
                return null;
            }

            return user.credentials.username;
        }
    }
}