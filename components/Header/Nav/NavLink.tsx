import { useRouter } from "next/router";
import Link from "next/link";

type Props = {
    children: JSX.Element | string;
    href: string;
    className: string;
}

const NavLink = ({ children, href, className }: Props) => {
    const router = useRouter();
    const isActive = router.asPath === href || router.pathname.startsWith(href);
    
    // ...
}

export default NavLink;