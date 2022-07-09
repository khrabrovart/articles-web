import * as ArticlesService from "./ArticlesService";
import * as ImagesService from "./ImagesService";

let preloaded = false;

export const preloadData = async (loadArticlesSummary: boolean) => {
  if (!preloaded) {
    if (loadArticlesSummary) {
      await ArticlesService.getArticlesSummary(false);
    }

    const articles = await ArticlesService.getArticles(false, false);
    ImagesService.preloadImages(articles.map((a) => a.imageUrl));

    preloaded = true;
  }
};
