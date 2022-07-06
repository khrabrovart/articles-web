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
    public Guid Id { get; set; }

    [DynamoDBProperty]
    public DateTime CreatedOn { get; set; }

    [DynamoDBProperty]
    public string Username { get; set; }

    [DynamoDBProperty]
    public string FirstName { get; set; }

    [DynamoDBProperty]
    public string LastName { get; set; }

    [DynamoDBProperty]
    public string Email { get; set; }
}