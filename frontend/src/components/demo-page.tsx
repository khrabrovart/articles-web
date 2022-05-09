import { useParams } from 'react-router-dom';
import { Page } from './page';

const DemoPage = () => {
  const { demoId } = useParams();

  return (
    <Page>This is a Demo page {demoId && <span>with id {demoId}</span>}</Page>
  );
};

export default DemoPage;
