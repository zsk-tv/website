import Styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={Styles.footer}>
      &copy; {new Date().getFullYear()} - ZSK TV Poznań
    </div>
  );
}

export default Footer;
