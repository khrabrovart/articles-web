namespace ArticlesWeb.Core.Entities;

public class CommentAuthor
{
    public int UserId { get; set; }

    public int UserImageId { get; set; }

    public string UserName { get; set; }

    public string FullName { get; set; }
}