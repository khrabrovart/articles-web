namespace ArticlesWeb.Functions.Articles.Get.Models;

public class CommentAuthor
{
    public Guid Id { get; private set; }

    public string UserName { get; private set; }

    public string FullName { get; private set; }
}