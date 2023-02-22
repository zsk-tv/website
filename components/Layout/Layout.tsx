import { Header } from "../Header";
import { Footer } from "../Footer";
import Styles from "./Layout.module.scss";

type Props = {
  children: React.ReactNode | string;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
