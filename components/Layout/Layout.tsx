import { useState, useEffect } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import Styles from "./Layout.module.scss";

type Props = {
  children: React.ReactNode | string;
};

function Layout({ children }: Props) {
  const [layoutStyles, setStyles] = useState(Styles.bgDark);

  const listenScrollEvent = (e: Event) => {
    if (window.scrollY < Math.round(window.innerHeight * 0.7)) {
      setStyles(Styles.bgDark);
    } else if (
      window.scrollY > Math.round(window.innerHeight * 0.7) &&
      window.scrollY < Math.round(window.innerHeight * 1.65)
    ) {
      setStyles(Styles.bgBlue);
    } else if (window.scrollY < Math.round(window.innerHeight * 2)) {
      setStyles(Styles.bgLight);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div className={`${Styles.container} ${layoutStyles}`}>
      <div className={Styles.wrapper}>
        <Header className={`${layoutStyles}`} />
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
