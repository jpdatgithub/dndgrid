using LiteDB;

namespace powerfantasy.api.Models.UserData
{
    public class User
    {
        public CredentialsModel credentials { get; set; }
        public Guid Id { get; set; }

        public User() { }

        public User(CredentialsModel credentials)
        {
            this.credentials = credentials;
            this.Id = Guid.NewGuid();
        }
    }
}