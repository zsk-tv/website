import Styles from "./Nav.module.scss";

type NavProps = {
    children: React.ReactNode | string;
    className?: string;
}

function Nav ({ children, className }: NavProps) {
    return(
        <ul className={`${Styles.nav} ${className}`}>
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