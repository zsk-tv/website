import Styles from "./Nav.module.scss";

type NavProps = {
    children: React.ReactNode | string;
}

function Nav ({ children }: NavProps) {
    return(
        <ul className={Styles.nav}>
            {children}
        </ul>
    )
}

type NavTabProps = {
    title: string;
}

function NavTab ({ title }: NavTabProps) {
    return(
        <li className={Styles.navTab}>
            {title}
        </li>
    )
}

export { NavTab, Nav };