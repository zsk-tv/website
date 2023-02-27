import { Grid, Card, Text } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faSpotify } from "@fortawesome/free-brands-svg-icons/faSpotify";

const CardsSocial = () => {
  return (
    <Grid.Container gap={0.5} justify="center" css={{ margin: "1.2rem 0" }}>
      <Grid xs={12} sm={3}>
        <a
          href="https://www.youtube.com/c/ZSKPozna%C5%84TV/"
          aria-label="YouTube"
          target="_blank"
          style={{ width: "100%" }}
        >
          <Card
            isPressable
            isHoverable
            css={{ mw: "400px", backgroundColor: "#EE0F0F" }}
          >
            <Card.Body>
              <Text
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  style={{ width: "23px", height: "23px", margin: "0 10px" }}
                />
                ZSK Poznań
              </Text>
            </Card.Body>
          </Card>
        </a>
      </Grid>
      <Grid xs={12} sm={3}>
        <a
          href="https://www.facebook.com/zsktvpoznan/"
          aria-label="Facebook"
          target="_blank"
          style={{ width: "100%" }}
        >
          <Card
            isPressable
            isHoverable
            css={{ mw: "400px", backgroundColor: "#0B84EE" }}
          >
            <Card.Body>
              <Text
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ width: "23px", height: "23px", margin: "0 10px" }}
                />
                zsktvpoznan
              </Text>
            </Card.Body>
          </Card>
        </a>
      </Grid>
      <Grid xs={12} sm={3}>
        <a
          href="https://www.instagram.com/zsktv/"
          aria-label="Instagram"
          target="_blank"
          style={{ width: "100%" }}
        >
          <Card
            isPressable
            isHoverable
            css={{
              mw: "400px",
              background:
                "linear-gradient(52deg, #3955E4 0%, #D82799 50%, #FDC47F 100%)",
            }}
          >
            <Card.Body>
              <Text
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ width: "23px", height: "23px", margin: "0 10px" }}
                />
                @zsktv
              </Text>
            </Card.Body>
          </Card>
        </a>
      </Grid>
      <Grid xs={12} sm={3}>
        <a
          href="https://open.spotify.com/show/1ABTFfH3VN3yBpmzxE7LrS"
          aria-label="Spotify"
          target="_blank"
          style={{ width: "100%" }}
        >
          <Card
            isPressable
            isHoverable
            css={{ mw: "400px", backgroundColor: "#1DB954" }}
          >
            <Card.Body>
              <Text
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon
                  icon={faSpotify}
                  style={{ width: "23px", height: "23px", margin: "0 10px" }}
                />
                ZSK podcast
              </Text>
            </Card.Body>
          </Card>
        </a>
      </Grid>
    </Grid.Container>
  );
};

export { CardsSocial };
