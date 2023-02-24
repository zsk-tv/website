import Styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={Styles.footer}>
      &copy; {new Date().getFullYear()} - ZSK TV Poznań
    </div>
  );
}

export default Footer;
