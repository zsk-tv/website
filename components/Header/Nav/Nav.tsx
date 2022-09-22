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

function NavTab ({ children }: NavProps) {
    return(
        <li className={Styles.navTab}>
            {children}
        </li>
    )
}

export { NavTab, Nav };