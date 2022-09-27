import {
  Layout,
  Content,
  Anchor,
  Slider,
  SocialLink,
  SocialLinks,
} from "../components";

function Index() {
  return (
    <Layout>
      <Content id="home">
        <h1>ZSK TV</h1>
        <p>
          ZSK TV jest kołem zainteresowań, które zrzesza zarówno miłośników
          tworzenia i obróbki filmów oraz grafiki komputerowej, jak i tych,
          którzy są otwarci na nowe doświadczenia.
        </p>
        <Anchor
          href="https://forms.office.com/r/KCpgSCtD6k"
          ariaLabel="Microsoft Forms"
          target="_blank"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="circle-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M280.2 150.2C273.1 143.8 262.1 142.2 254.3 146.1S239.1 158.5 239.1 167.1l.002 56L152 224C138.8 224 128 234.8 128 248v16C128 277.3 138.8 288 152 288L240 287.1v56c0 9.531 5.656 18.16 14.38 22c8.75 3.812 18.91 2.094 25.91-4.375l96-88.75C381.2 268.3 384 261.9 384 255.2c-.3125-7.781-2.875-13.25-7.844-17.75L280.2 150.2zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
            ></path>
          </svg>
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
          <SocialLink
            href="https://www.youtube.com/c/ZSKPozna%C5%84TV/"
            platform="YouTube"
          />
          <SocialLink
            href="https://www.facebook.com/zsktvpoznan/"
            platform="Facebook"
          />
          <SocialLink
            href="https://www.instagram.com/zsktv/"
            platform="Instagram"
          />
          <SocialLink
            href="https://open.spotify.com/show/1ABTFfH3VN3yBpmzxE7LrS"
            platform="Spotify"
          />
        </SocialLinks>
      </Content>
    </Layout>
  );
}

export default Index;
