import { Link } from 'react-router-dom';
import { css } from '@emotion/react';

export const Header = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="about">About</Link>
    <Link
      css={css`
        font-weight: 1000;
      `}
      to="demo"
    >
      Demo
    </Link>
    <Link
      css={css`
        font-weight: 1000;
      `}
      to="search?searchText=text"
    >
      Search
    </Link>
  </div>
);
