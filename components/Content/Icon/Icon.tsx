import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "./Icon.module.scss";

type Props = {
  icon: IconProp;
};

function Icon({ icon, ...props }: Props) {
  return <FontAwesomeIcon className={Styles.icon} icon={icon} {...props} />;
}

export default Icon;
