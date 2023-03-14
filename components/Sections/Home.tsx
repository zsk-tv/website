import { Content } from "../";
import { Text, Button } from "@nextui-org/react";

export const Home = () => {
  return (
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
        pasjonatów elektroniki, programowania, jak i tych, którzy są otwarci na
        nowe doświadczenia.
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
  );
};
