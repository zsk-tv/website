import { Header } from "../Header";
import Styles from "./Layout.module.scss";

type Props = {
  children: React.ReactNode | string;
};

function Layout({ children }: Props) {
  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Layout;
