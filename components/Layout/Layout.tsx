import { useEffect, useState } from "react";
import { Footer } from "../Footer";
import Styles from "./Layout.module.scss";
import { gradients } from "./gradients";
import { getScrollPercent } from "./getScrollPercent";
import { Container } from "@nextui-org/react";

type Props = {
  children: React.ReactNode | string;
};

const Layout = ({ children }: Props) => {
  const [scrollPercent, setScrollPercent] = useState(0);

  const [gradient, setGradient] = useState(gradients.home);
  const [gradientAngle, setGradientAngle] = useState(0);

  const listenScrollEvent = () => {
    setScrollPercent(getScrollPercent());

    const { documentElement } = document;

    setGradientAngle(
      (Math.pow(Math.cbrt(Math.pow(scrollPercent, 2)), 2) *
        Math.floor(
          Math.cos(documentElement.clientWidth * documentElement.clientHeight) /
            10
        )) %
        360
    );

    scrollPercent < 25
      ? setGradient(gradients.home)
      : scrollPercent >= 25 && scrollPercent < 50
      ? setGradient(gradients.about)
      : scrollPercent >= 50 && scrollPercent < 75
      ? setGradient(gradients.github)
      : scrollPercent >= 75 && scrollPercent < 100
      ? setGradient(gradients.sm)
      : setGradient(gradients.home);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  });

  return (
    <div
      className={Styles.gradients}
      style={{
        background: `linear-gradient(${gradientAngle}deg, ${gradient})`,
      }}
    >
      <Container className={Styles.container} xl>
        <div className={Styles.wrapper}>{children}</div>
        <Footer />
      </Container>
    </div>
  );
};

export default Layout;
