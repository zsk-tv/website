import Styles from "./Footer.module.scss";

function Footer () {
    const copyYear = new Date().getFullYear();

    return(
        <div className={Styles.footer}>
            &copy; {copyYear} - ZSKTV Poznań
        </div>
    )
}

export default Footer;