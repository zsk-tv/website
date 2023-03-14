import { Content } from "../";
import { CardsGithub } from "../Content/Cards";
import { Text } from "@nextui-org/react";

export const Github = () => {
  return (
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
  );
};
