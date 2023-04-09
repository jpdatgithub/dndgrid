namespace powerfantasy.api.Models.UserData
{
    public class AccessToken
    {
        public Guid Id { get; set; }
        public string UserId { get; set; }
        public DateTime ExpirationDate { get; set; }
    }
}
