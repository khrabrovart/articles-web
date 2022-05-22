import { ArticleComment } from "../../types/Articles";

const articleComments: ArticleComment[] = [
  {
    id: 1,
    articleId: 1,
    date: new Date("2021-10-01T12:30:00Z"),
    content: "Some comment",
    user: {
      name: "adam_savage",
      fullName: "Adam Savage",
    },
  },
  {
    id: 2,
    articleId: 1,
    date: new Date("2021-10-02T14:30:00Z"),
    content:
      "Without it we wouldn't have the growing selection of electric vehicles we have today, yet the 2022 Tesla Model S remains one of the most compelling and desirable options in that growing market segment. It also earns a spot on our 2022 Editors' Choice list. With up to 412 miles of estimated driving range—depending upon model—the S can easily be used for long drives, and the 1020-hp Plaid version can deliver supercar acceleration while seating four adults.",
    user: {
      name: "adam_savage",
      fullName: "Adam Savage",
    },
  },
  {
    id: 3,
    articleId: 1,
    date: new Date("2021-10-02T15:30:00Z"),
    content:
      "The cabin's atmosphere is nice enough, but it's not nearly as plush as those of our favorites such as the Mercedes-Benz E-class and the Volvo S90.",
    user: {
      name: "adam_savage",
      fullName: "Adam Savage",
    },
  },
];

const useArticleComments = (): ((articleId: number) => ArticleComment[]) => {
  return (articleId) =>
    articleComments.filter((ac) => ac.articleId === articleId);
};

export default useArticleComments;
