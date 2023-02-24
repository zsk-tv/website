import Styles from "./Nav.module.scss";

type NavProps = {
    children: React.ReactNode | string;
    className?: string;
}

const Nav = ({ children, className }: NavProps) => {
    return(
        <ul className={`${Styles.nav} ${className}`}>
            {children}
        </ul>
    )
}

const NavTab = ({ children }: NavProps) => {
    return(
        <li className={Styles.navTab}>
            {children}
        </li>
    )
}

export { NavTab, Nav };