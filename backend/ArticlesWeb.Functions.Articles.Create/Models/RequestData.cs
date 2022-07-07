namespace ArticlesWeb.Functions.Articles.Create.Models;

public class RequestData
{
    public string Title { get; set; }

    public string ImageUrl { get; set; }

    public IReadOnlyCollection<Section> Sections { get; set; }

    public class Section
    {
        public string Title { get; set; }

        public string Content { get; set; }
    }
}