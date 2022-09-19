import { Nav, NavTab } from "./Nav";
import Styles from "./Header.module.scss";

function Header () {
    return( 
        <div className={Styles.header}>
            <Nav>
                <NavTab title="Strona główna" />
                <NavTab title="O nas" />
                <NavTab title="Social media" />
            </Nav>
        </div>
    )
}

export default Header;