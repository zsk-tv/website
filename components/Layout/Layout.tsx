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

    const elementHtml = document.documentElement;

    setGradientAngle(
      (Math.pow(Math.cbrt(Math.pow(scrollPercent, 2)), 2) *
        Math.floor(
          Math.cos(elementHtml.clientWidth * elementHtml.clientHeight) / 10
        )) %
        360
    );

    if (scrollPercent < 25) {
      setGradient(gradients.home);
    } else if (scrollPercent >= 25 && scrollPercent < 50) {
      setGradient(gradients.about);
    } else if (scrollPercent >= 50 && scrollPercent < 75) {
      setGradient(gradients.github);
    } else if (scrollPercent >= 75 && scrollPercent < 100) {
      setGradient(gradients.sm);
    }
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
