import { Layout, SEO } from "../components";
import { Home, About, Github, SocialMedia } from "../components/Sections";

const Index = () => {
  return (
    <Layout>
      <SEO />
      <Home />
      <About />
      <Github />
      <SocialMedia />
    </Layout>
  );
};

export default Index;
