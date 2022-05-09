import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AboutPage from "./views/about/AboutPage";
import ArticlesPage from "./views/articles/ArticlesPage";
import HomePage from "./views/home/HomePage";
import NewsPage from "./views/news/NewsPage";
import NotFoundPage from "./views/not-found/NotFoundPage";
import SignInPage from "./views/sign-in/SignInPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="articles" element={<ArticlesPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
