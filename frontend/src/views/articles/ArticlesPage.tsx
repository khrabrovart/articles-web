import React from "react";
import styled from "styled-components";
import Page from "../Page";

const articles = [
  {
    id: 1,
    title: "Tesla Model S",
    summary: "Some short text, TL;DR;",
    content: "Article's content",
    imageUrl:
      "https://tesla-cdn.thron.com/delivery/public/image/tesla/2391415a-7273-4735-92b2-a37c84c26f04/bvlatuR/std/4096x2560/Homepage-Model-S-Desktop-RHD",
  },
  {
    id: 2,
    title: "Some article",
    summary: "Some short text, TL;DR;",
    content: "Article's content",
    imageUrl:
      "https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg",
  },
  {
    id: 3,
    title: "Some article",
    summary: "Some short text, TL;DR;",
    content: "Article's content",
    imageUrl:
      "https://lh3.googleusercontent.com/qn-UOddJxMNxeGUTHAUVYgpAWIxXg-O3PkUdq9BC-EyWSzCo3HPY2hfuRbRj9lyUC-HLf4YHWd7ZdP4MxSIxXDUL6QfhxxWLtYCt9YjzbAEzpM6kN-DrKshugETV2gi1iNyCz7MROrWueLgoGNVaoem6vTUDsDwbjof9Q8pltb9qJfkYggSIxk4eEV1KVIxW1iIR9ufBvkYZZXV_cmTdiBct72rl1cIcUGRiRhmwvMdwNoWolATSK9d4dnCL1iQg3ec2FNsPwYJZf6d3E0NEYjyRQ1nTJhMIn1GjSFRzcJZppbIN2JYBJ--3Km1Gcdk7c_P0A4q2sUivDXIoTJC0s8zrIhJYqLtoSISOM8fInH1xT21wLqI4AYtFPTQzK--02jrs1mmPEW0n52HB9pShB24GFLh3JWx_du524OlycN2rhgJxBFDnOmJtNROqzlEEepilPaKglLka4MedBWsZz1TJIjGAAXqXL4p7NgDXVXunn2qfWJm47dmOuX6R0aNrUGXOYez0xsmWtJiZX0deU3KWeqcXaMf5TRTZRwd3qZkeSUbMJteJAWBI1wYDZgI-25SLKdkvrw5va2nqSravQ515ivrGJv1xI6VNmSlrKOE3ghhKbcZH3m_o0V_TfmJo4C7KVfjVi5tHuEgkSVn0SZ3bUplIeSI29oeoZTY8Xzg432JV9P-YDhMho6xWYVDi0U8IljBh-u7HcfxPhiWe4kWzsrF2nD_zL1oN3yR-57rkhM0Yyuh1Xq9jISh-I_nIVb0d4mlz4_aQAiDAAEZc_vEg40yhdZ2fezDx=w1250-h937-no?authuser=0",
  },
  {
    id: 4,
    title: "Some article",
    summary: "Some short text, TL;DR;",
    content: "Article's content",
    imageUrl:
      "https://www.fivb.org/Vis2009/Images/GetImage.asmx?Type=Press&No=90687&width=1410&height=923&stretch=uniformtofill",
  },
  {
    id: 5,
    title: "Some article",
    summary: "Some short text, TL;DR;",
    content: "Article's content",
    imageUrl:
      "https://daily.jstor.org/wp-content/uploads/2016/10/Moving_Forest_1050_700.jpg",
  },
  {
    id: 6,
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

const Article = styled.div<{ image?: string }>`
  padding: 20px;
  height: 330px;
  width: 290px;
  border-radius: 5px;
  color: ${(props) => (props.image ? "#fdfdfd" : "#4a4a4a")};
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)),
    ${(props) => props.image && `url(${props.image});`};
  background-position: center top;
  background-size: cover;
  box-shadow: 3px 3px 8px #aaa;

  &:hover {
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)),
      ${(props) => props.image && `url(${props.image});`};
    background-position: center top;
    background-size: cover;
  }
`;

const ArticleTitle = styled.div`
  font-size: 18pt;
  font-weight: bold;
`;

const ArticleSummary = styled.div`
  font-size: 14pt;
`;

const ArticlesPage = () => {
  return (
    <Page label="Articles">
      <Container>
        {articles.map((article) => (
          <Article key={article.id} image={article.imageUrl}>
            <ArticleTitle>{article.title}</ArticleTitle>
            <ArticleSummary>{article.summary}</ArticleSummary>
          </Article>
        ))}
      </Container>
    </Page>
  );
};

export default ArticlesPage;
