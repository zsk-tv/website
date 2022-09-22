import { Layout, Content } from "../components";

function Index() {
  return (
    <Layout>
      <Content id="home">
        <h1>ZSKTV</h1>
        <p>Tekst o ZSKTV...</p>
      </Content>
      <Content id="about">
        <h1>O nas</h1>
        <p>Tekst o nas...</p>
      </Content>
      <Content id="sm">
        <h1>Social media</h1>
        <p>Odwiedź nasze social media!</p>
      </Content>
    </Layout>
  );
}

export default Index;
