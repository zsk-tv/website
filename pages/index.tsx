import {
  Layout,
  Content,
  Anchor,
  Slider,
  SocialLink,
  SocialLinks,
} from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-regular-svg-icons/faCircleRight";

function Index() {
  return (
    <Layout>
      <Content id="home">
        <h1>ZSK TV</h1>
        <p>
          Jesteśmy kołem zainteresowań, które zrzesza zarówno miłośników
          tworzenia i obróbki filmów oraz grafiki komputerowej, jak i tych,
          którzy są otwarci na nowe doświadczenia.
        </p>
        <Anchor
          href="https://forms.office.com/r/KCpgSCtD6k"
          ariaLabel="Microsoft Forms"
          target="_blank"
        >
          <FontAwesomeIcon icon={faCircleRight} />
          &nbsp; Dołącz do nas!
        </Anchor>
      </Content>
      <Content id="about">
        <h1>O nas</h1>
        <p>
          Jesteśmy zespołem amatorów sztuki filmowej, ale również uczniami ZSK w
          Poznaniu. Każdy z nas ma inne hobby, wzbogaca nasz team tym, co cenimy
          najbardziej - różnorodnością.
        </p>
        <Slider />
      </Content>
      <Content id="sm">
        <h1>Social media</h1>
        <p>Odwiedź również nasze social media!</p>

        <SocialLinks>
          <SocialLink href="https://www.youtube.com/c/ZSKPozna%C5%84TV/" platform="YouTube" />
          <SocialLink href="https://www.facebook.com/zsktvpoznan/" platform="Facebook" />
          <SocialLink href="https://www.instagram.com/zsktv/" platform="Instagram" />
          <SocialLink href="https://open.spotify.com/show/1ABTFfH3VN3yBpmzxE7LrS" platform="Spotify" />
        </SocialLinks>
      </Content>
    </Layout>
  );
}

export default Index;
