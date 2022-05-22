import React, { MouseEvent } from "react";
import styled from "styled-components";

const Container = styled.button`
  background: #4a4a4a;
  color: #fdfdfd;
  padding: 10px 20px;
  font-size: 11pt;
  font-weight: 600;
  letter-spacing: 1px;
  border: 0;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const Button = (props: {
  label: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}) => {
  return <Container onClick={(e) => props.onClick(e)}>{props.label}</Container>;
};

export default Button;
