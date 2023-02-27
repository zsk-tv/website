import { Content, Slider} from "../";
import { Text, Button, Modal, useModal } from "@nextui-org/react";

const About = () => {
    const { setVisible, bindings } = useModal();

    return(
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
    )
}

export { About };