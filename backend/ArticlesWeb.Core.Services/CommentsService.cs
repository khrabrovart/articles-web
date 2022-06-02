using ArticlesWeb.Core.Entities;

namespace ArticlesWeb.Core.Services;

public class CommentsService : ICommentsService
{
    public async Task<IReadOnlyCollection<Comment>> Get(int articleId)
    {
        var comments = new Comment[]
        {
            new()
            {
                Content = "First comment",
                Date = DateTime.Parse("03/05/2022 07:22:16")
            },
            new()
            {
                Content = "Second comment",
                Date = DateTime.Parse("01/06/2022 14:30:55")
            }
        };

        return await Task.FromResult(comments);
    }
}