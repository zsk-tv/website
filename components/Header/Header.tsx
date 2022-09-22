import { Nav, NavTab } from "./Nav";
import Styles from "./Header.module.scss";

type Props = {
    className?: string;
}

function Header ({ className }: Props) {
    return( 
        <div className={`${Styles.header} ${className}`}>
            <Nav>
                <NavTab><a href="#home">Home</a></NavTab>
                <NavTab><a href="#about">O nas</a></NavTab>
                <NavTab><a href="#sm">Social media</a></NavTab>
            </Nav>
        </div>
    )
}

export default Header;