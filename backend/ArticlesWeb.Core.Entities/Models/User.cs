using Amazon.DynamoDBv2.DataModel;

namespace ArticlesWeb.Core.Entities;

[DynamoDBTable("users", lowerCamelCaseProperties: true)]
public class User
{
    public User(string username)
    {
        Id = Guid.NewGuid();
        CreatedOn = DateTime.UtcNow;
        Username = username;
    }

    public User()
    {
    }

    [DynamoDBHashKey]
    public Guid Id { get; private set; }

    public DateTime CreatedOn { get; private set; }

    public string Username { get; private set; }

    public string FirstName { get; private set; }

    public string LastName { get; private set; }

    public string Email { get; private set; }
}