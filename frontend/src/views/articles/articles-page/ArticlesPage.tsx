import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Article } from "../../../types/Articles";
import Page from "../../Page";

const articles: Article[] = [
  {
    id: "test",
    title: "Tesla Model S",
    summary: "Some short text, TL;DR;",
    content: "Article's content",
    imageUrl:
      "https://tesla-cdn.thron.com/delivery/public/image/tesla/2391415a-7273-4735-92b2-a37c84c26f04/bvlatuR/std/4096x2560/Homepage-Model-S-Desktop-RHD",
  },
  {
    id: "2",
    title: "Some article",
    summary: "Some short text, TL;DR;",
    content: "Article's content",
    imageUrl:
      "https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg",
  },
  {
    id: "3",
    title: "Some article",
    summary: "Some short text, TL;DR;",
    content: "Article's content",
    imageUrl:
      "https://images.frandroid.com/wp-content/uploads/2020/12/processeur-cpu.jpg",
  },
  {
    id: "4",
    title: "Some article",
    summary: "Some short text, TL;DR;",
    content: "Article's content",
    imageUrl:
      "https://www.fivb.org/Vis2009/Images/GetImage.asmx?Type=Press&No=90687&width=1410&height=923&stretch=uniformtofill",
  },
  {
    id: "5",
    title: "Some article",
    summary: "Some short text, TL;DR;",
    content: "Article's content",
    imageUrl:
      "https://daily.jstor.org/wp-content/uploads/2016/10/Moving_Forest_1050_700.jpg",
  },
  {
    id: "6",
    title: "Some article",
    summary: "Some short text, TL;DR;",
    content: "Article's content",
    imageUrl:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80",
  },
];

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 50px;
`;

const ArticlePanel = styled.div<{ imageUrl: string }>`
  padding: 20px;
  height: 330px;
  width: 290px;
  border-radius: 5px;
  color: #fdfdfd;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)),
    url(${(props) => props.imageUrl});
  background-position: center top;
  background-size: cover;
  box-shadow: 3px 3px 8px #aaa;
  cursor: pointer;

  &:hover {
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)),
      url(${(props) => props.imageUrl});
    background-position: center top;
    background-size: cover;
  }
`;

const ArticlePanelTitle = styled.div`
  font-size: 18pt;
  font-weight: bold;
`;

const ArticlePanelSummary = styled.div`
  font-size: 14pt;
`;

const ArticlesPage = () => {
  const navigate = useNavigate();

  const openArticle = (articleId: string) => {
    navigate(`./${articleId}`);
  };

  return (
    <Page label="Articles">
      <Container>
        {articles.map((article) => (
          <ArticlePanel
            key={article.id}
            imageUrl={article.imageUrl}
            onClick={() => openArticle(article.id)}
          >
            <ArticlePanelTitle>{article.title}</ArticlePanelTitle>
            <ArticlePanelSummary>{article.summary}</ArticlePanelSummary>
          </ArticlePanel>
        ))}
      </Container>
    </Page>
  );
};

export default ArticlesPage;
