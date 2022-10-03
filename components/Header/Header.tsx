import { useState } from "react";
import { Nav, NavTab } from "./Nav";
import { LogoIcon } from "./";
import Styles from "./Header.module.scss";

type Props = {
  className?: string;
};

function Header({ className }: Props) {
  const [expanded, setExpanded] = useState(Styles.collapsed);

  const handleHamburger = () => {
    if (expanded == Styles.collapsed) {
      setExpanded(Styles.expanded);
    } else if (expanded == Styles.expanded) {
      setExpanded(Styles.collapsed);
    }
  };

  return (
    <div className={`${Styles.header} ${className}`}>
      <div className={Styles.buttons}>
        <LogoIcon className={Styles.logo} width="50" height="50" />
        <span
          className={Styles.hamburger}
          onClick={handleHamburger}
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5rem"
            role="img"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </span>
      </div>
      <Nav className={expanded}>
        <NavTab>
          <a href="#home" aria-label="Home">
            Home
          </a>
        </NavTab>
        <NavTab>
          <a href="#about" aria-label="O nas">
            O nas
          </a>
        </NavTab>
        <NavTab>
          <a href="#sm" aria-label="Social media">
            Social media
          </a>
        </NavTab>
      </Nav>
    </div>
  );
}

export default Header;
