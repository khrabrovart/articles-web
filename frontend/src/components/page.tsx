import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode;
}

const Container = styled.div`
  padding: 10px;
`;

export const Page = (props: Props) => <Container>{props.children}</Container>;
