import React, { MouseEvent } from "react";
import styled from "styled-components";

const Container = styled.button`
  background: #222;
  color: #fff;
  padding: 10px 25px;
  font-size: 11pt;
  font-weight: 600;
  letter-spacing: 1px;
  border: 0;
  border-radius: 2px;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.1s linear, color 0.1s linear, opacity 0.05s linear;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    background: #f5f5f5;
    color: #aaa;
    opacity: 1;
    cursor: default;
  }
`;

const Button = (props: {
  label: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
}) => {
  return (
    <Container onClick={(e) => props.onClick(e)} disabled={props.disabled}>
      {props.label}
    </Container>
  );
};

export default Button;
