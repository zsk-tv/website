import { Layout, Content, Slider } from "../components";
import { CardsSocial, CardsGithub } from "../components/Content/Cards";
import { Text, Grid, Button, Modal, useModal } from "@nextui-org/react";
import { SEO } from "../components";

const Index = () => {
  const { setVisible, bindings } = useModal();

  return (
    <Layout>
      <SEO />
      <Content id="home">
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, #E2B0FF -50%, #9F44D3 100%",
          }}
          weight="bold"
        >
          ZSK TV
        </Text>
        <Text h4 size={35} weight="bold">
          ZSK TV jest kołem zainteresowań, które zrzesza nie tylko miłośników
          tworzenia i obróbki filmów oraz grafiki komputerowej, ale również
          pasjonatów elektroniki, programowania, jak i tych, którzy są otwarci
          na nowe doświadczenia.
        </Text>
        <a
          href="https://forms.office.com/r/KCpgSCtD6k"
          target="_blank"
          aria-label="Microsoft Forms - formularz rekrutacyjny"
          style={{
            marginTop: "1.2rem",
          }}
        >
          <Button
            size="xl"
            css={{
              linearGradient: "45deg, #E2B0FF -50%, #9F44D3 100%",
            }}
          >
            Dołącz do nas!
          </Button>
        </a>
      </Content>
      <Content id="about">
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, #7bf233 -50%, #2C8500 100%",
          }}
          weight="bold"
        >
          O nas
        </Text>
        <Text h4 size={35} weight="bold">
          Jesteśmy zespołem amatorów sztuki filmowej, ale również uczniami ZSK w
          Poznaniu. Każdy z nas ma inne hobby, wzbogaca nasz team tym, co cenimy
          najbardziej - różnorodnością.
        </Text>
        <Button
          size="xl"
          css={{
            linearGradient: "45deg, #7bf233 -50%, #2C8500 100%",
            width: "fit-content",
            marginTop: "1.2rem",
          }}
          onPress={() => setVisible(true)}
        >
          Otwórz galerię
        </Button>
        <Modal
          scroll
          fullScreen
          closeButton
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          {...bindings}
        >
          <Modal.Header>
            <Text id="modal-title" size={35} weight="bold">
              Galeria
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Slider />
          </Modal.Body>
        </Modal>
      </Content>
      <Content id="github">
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, #FFFFFF -50%, #4d5e69 100%",
          }}
          weight="bold"
        >
          GitHub
        </Text>
        <Text h4 size={35} weight="bold">
          Sprawdź nasze projekty na GitHubie!
        </Text>
        <CardsGithub />
      </Content>
      <Content id="sm">
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, #F9B980 -50%, #D82998 100%",
          }}
          weight="bold"
        >
          Social media
        </Text>
        <Text h4 size={35} weight="bold">
          Odwiedź również nasze social media!
        </Text>

        <CardsSocial />
      </Content>
    </Layout>
  );
};

export default Index;
