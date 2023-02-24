import Styles from "./Anchor.module.scss";

type Props = {
  children: React.ReactNode | string;
  href: string;
  ariaLabel: string;
  target?: string;
  className?: string | undefined;
};

const Anchor = ({
  children,
  href,
  ariaLabel,
  target,
  className,
}: Props): JSX.Element => {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={target}
      className={`${Styles.anchor} ${className ? className : ""}`}
    >
      {children}
    </a>
  );
}

export default Anchor;
