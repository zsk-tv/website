import Styles from "./Content.module.scss";

type Props = {
  id: string;
  children: React.ReactNode | string;
};

function Content({ id, children }: Props) {
  return (
    <section id={id} className={Styles.content}>
      {children}
    </section>
  );
}

export default Content;
