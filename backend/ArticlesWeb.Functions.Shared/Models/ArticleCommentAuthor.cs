using ArticlesWeb.Core.Entities;

namespace ArticlesWeb.Functions.Shared.Models;

public class ArticleCommentAuthor
{
    public ArticleCommentAuthor(DbUser dbUser)
    {
        Id = dbUser.Id;
        Username = dbUser.Username;
        FirstName = dbUser.FirstName;
        LastName = dbUser.LastName;
    }

    public Guid Id { get; }

    public string Username { get; }

    public string FirstName { get; }

    public string LastName { get; }
}