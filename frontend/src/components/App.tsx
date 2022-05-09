import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import News from "./pages/News";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="articles" element={<Articles />} />
        <Route path="about" element={<About />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
