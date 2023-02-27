import { useEffect, useState } from "react";
import { Footer } from "../Footer";
import Styles from "./Layout.module.scss";

type Props = {
  children: React.ReactNode | string;
};

const Layout = ({ children }: Props) => {
  const gradients = {
    home: `rgba(0,0,0,1) 0%, rgba(0,0,0,1) 6%, rgba(0,0,0,1) 9%, rgba(93,55,113,1) 31%, rgba(88,37,120,1) 54%, rgba(97,44,128,1) 75%, rgba(130,64,166,1) 88%, rgba(146,60,196,1) 100%`,
    about: `rgba(0,0,0,1) 0%, rgba(0,0,0,1) 6%, rgba(0,0,0,1) 9%, rgba(34,64,17,1) 31%, rgba(51,96,23,1) 54%, rgba(33,101,0,1) 75%, rgba(38,107,3,1) 88%, rgba(46,140,0,1) 100%`,
    github: `rgba(0,0,0,1) 13%, rgba(36,36,36,1) 15%, rgba(33,36,41,1) 30%, rgba(0,0,0,1) 43%, rgba(39,42,47,1) 67%, rgba(40,43,47,1) 70%, rgba(0,0,0,1) 85%, rgba(0,0,0,1) 100%`,
    sm: `#F9B980 -50%, #D82998 100%`,
  };

  const [angle, setAngle] = useState(0);
  const [gradient, setGradient] = useState(gradients.home);

  const getScrollPercent = () => {
    const h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";
    return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
  };

  const listenScrollEvent = (event: Event) => {
    const h = document.documentElement,
      st = "scrollTop";

    setAngle(
      (Math.pow(Math.cbrt(Math.pow(getScrollPercent(), 2)), 2) *
        Math.floor(Math.cos(h.clientWidth * h.clientHeight) / 10)) %
        360
    );

    if (getScrollPercent() < 25) {
      setGradient(gradients.home);
    } else if (getScrollPercent() >= 25 && getScrollPercent() < 50) {
      setGradient(gradients.about);
    } else if (getScrollPercent() >= 50 && getScrollPercent() < 75) {
      setGradient(gradients.github);
    } else if (h[st] >= h.clientHeight) {
      setGradient(gradients.sm);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  });

  return (
    console.info(angle),
    (
      <div
        className={Styles.gradients}
        style={{ background: `linear-gradient(${angle}deg, ${gradient})` }}
      >
        <div className={Styles.container}>
          <div className={Styles.wrapper}>{children}</div>
          <Footer />
        </div>
      </div>
    )
  );
};

export default Layout;
