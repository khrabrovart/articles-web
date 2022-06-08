import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

const Container = styled.section`
  margin: 75px auto;
  max-width: 1100px;
  padding: 0 20px;
`;

const Page = (props: Props) => {
  return <Container>{props.children}</Container>;
};

export default Page;
