using LiteDB;

namespace powerfantasy.api.Models.UserData
{
    public class User
    {
        public CredentialsModel credentials { get; set; }
        public ObjectId Id { get; set; }
    }
}
