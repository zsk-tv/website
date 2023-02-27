import { Card, Grid, Text, Link, Tooltip } from "@nextui-org/react";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);
const API = "https://api.github.com/orgs/zsk-tv/repos";

const CardsGithub = () => {
  const { data, error } = useSWR(API, fetcher);

  return !error ? (
    <Grid.Container justify="flex-start" css={{ margin: "1.5rem 0" }}>
      <Grid xs={12} sm={7}>
        {data?.map((repo: any, r: any) => {
          return (
            <Card
              key={r}
              css={{ p: "$6", mw: "400px", marginRight: "0.7rem" }}
              variant="bordered"
              isHoverable
              isPressable
            >
              <a
                href={repo.html_url}
                target="_blank"
                style={{ width: "100%", height: "100%" }}
              >
                <Card.Header>
                  <Tooltip content={repo.language} color="secondary">
                    <i
                      className={`devicon-${
                        repo.language == "Dockerfile"
                          ? "docker"
                          : repo.language.toLowerCase()
                      }-plain colored`}
                      style={{ fontSize: "2.5em" }}
                    ></i>
                  </Tooltip>
                  <Grid.Container css={{ pl: "$6" }}>
                    <Grid xs={12}>
                      <Text h4 css={{ lineHeight: "$xs" }}>
                        {repo.name}
                      </Text>
                    </Grid>
                    <Grid xs={12}>
                      <Text
                        css={{
                          color: "$accents8",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginRight: "1rem",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            style={{
                              width: "18px",
                              height: "18px",
                              margin: "0 5px",
                            }}
                          >
                            <path
                              fill="#ffbf00"
                              d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"
                            />
                          </svg>
                          {repo.stargazers_count}
                        </span>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            style={{
                              width: "18px",
                              height: "18px",
                              margin: "0 5px",
                            }}
                          >
                            <path
                              fill="#93989E"
                              d="M305.8 2.1C314.4 5.9 320 14.5 320 24V64h16c70.7 0 128 57.3 128 128V358.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V192c0-35.3-28.7-64-64-64H320v40c0 9.5-5.6 18.1-14.2 21.9s-18.8 2.3-25.8-4.1l-80-72c-5.1-4.6-7.9-11-7.9-17.8s2.9-13.3 7.9-17.8l80-72c7-6.3 17.2-7.9 25.8-4.1zM104 80c0-13.3-10.7-24-24-24S56 66.7 56 80s10.7 24 24 24s24-10.7 24-24zm8 73.3V358.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80c0 32.8-19.7 61-48 73.3zM104 432c0-13.3-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24s24-10.7 24-24zm328 24c13.3 0 24-10.7 24-24s-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24z"
                            />
                          </svg>
                          {repo.forks_count}
                        </span>
                      </Text>
                    </Grid>
                  </Grid.Container>
                </Card.Header>
                <Card.Body css={{ py: "$2" }}>
                  <Text weight="light">{repo.description}</Text>
                </Card.Body>
                <Card.Footer>
                  <Link color="primary" target="_blank" href={repo.html_url}>
                    Zobacz kod źródłowy.
                  </Link>
                </Card.Footer>
              </a>
            </Card>
          );
        })}
      </Grid>
    </Grid.Container>
  ) : (
    <Grid.Container gap={1} justify="center">
      <Grid xs={12} sm={3}>
        <Card css={{ p: "$6", mw: "400px" }}>
          <Card.Header>
            <Grid.Container css={{ pl: "$6" }}>
              <Grid xs={12}>
                <Text h4 css={{ lineHeight: "$xs" }}>
                  Wystąpił błąd.
                </Text>
              </Grid>
            </Grid.Container>
          </Card.Header>
          <Card.Body css={{ py: "$2" }}>
            <Text>Wystąpił błąd podczas ładowania danych z GitHuba.</Text>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
};

export { CardsGithub };
