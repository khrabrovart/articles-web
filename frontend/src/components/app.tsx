import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutPage } from './about-page';
import { Header } from './header';
import { HomePage } from './home-page';
import { css } from '@emotion/react';
import { NotFoundPage } from './not-found-page';
import { SearchPage } from './search-page';

const DemoPage = React.lazy(() => import('./demo-page'));

const toSuspense = (element: React.ReactElement) => (
  <React.Suspense fallback={<div>Loading...</div>}>{element}</React.Suspense>
);

const baseStyle = css`
  color: green;
`;

export const App = () => {
  return (
    <BrowserRouter>
      <div css={baseStyle}>
        <Header />
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="demo/:demoId" element={toSuspense(<DemoPage />)} />
          <Route path="demo" element={toSuspense(<DemoPage />)} />
          <Route path="search" element={<SearchPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
