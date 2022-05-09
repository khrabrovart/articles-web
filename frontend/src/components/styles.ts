import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const primaryColor = '#ff3737';
export const secondaryColor = '#5c5a5a';
export const primaryHoverColor = '#857c81';
export const secondaryHoverColor = '#b9b9b9';
export const primary2 = '#824c67';
export const fontFamily = "'Segoe UI', 'Helvetica Neue',sans-serif";
export const fontSize = '16px';

interface Props {
  primary?: boolean;
  weight: 200 | 300 | 400 | 800 | 1000;
}

const background = (props: Props) => css`
  font-weight: ${props.primary};
`;

const disabled = css`
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Button = styled.button<Props>`
  ${background}
  border-color: ${primary2};
  border-style: solid;
  border-radius: 5px;
  font-family: ${fontFamily};
  font-size: ${fontSize};
  padding: 5px 10px;
  color: white;
  font-weight: ${({ weight }) => weight};
  cursor: pointer;

  background-color: ${({ primary = false }) =>
    primary ? primaryColor : secondaryColor};

  :hover {
    background-color: ${({ primary = false }) =>
      primary ? primaryHoverColor : secondaryHoverColor};
  }

  :focus {
    outline-color: ${primary2};
  }
  ${disabled}
`;
