import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/utils/ScrollToTop";
import AboutPage from "./views/about/AboutPage";
import ArticlePage from "./views/articles/article-page/ArticlePage";
import ArticlesPage from "./views/articles/articles-page/ArticlesPage";
import HomePage from "./views/home/HomePage";
import NewsPage from "./views/news/NewsPage";
import NotFoundPage from "./views/not-found/NotFoundPage";
import SignInPage from "./views/sign-in/SignInPage";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="articles" element={<ArticlesPage />} />
            <Route path="articles/:articleId" element={<ArticlePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="sign-in" element={<SignInPage />} />
            <Route path="404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
