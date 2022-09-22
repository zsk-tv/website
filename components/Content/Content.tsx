import Styles from "./Content.module.scss";

type Props = {
  id: string;
  children: React.ReactNode | string;
};

function Content({ id, children }: Props) {
  return (
    <div id={id} className={Styles.content}>
      {children}
    </div>
  );
}

export default Content;
