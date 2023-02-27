import { Content } from "../";
import { CardsSocial } from "../Content/Cards";
import { Text } from "@nextui-org/react";

const SocialMedia = () => {
    return(
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
    )
}

export { SocialMedia };