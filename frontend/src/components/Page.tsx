import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Container = styled.section`
  margin: 50px 500px;
`;

const Page = (props: Props) => {
  return <Container>{props.children}</Container>;
};

export default Page;
