import Styles from "./SocialLink.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faSpotify } from "@fortawesome/free-brands-svg-icons/faSpotify";

type Props = {
  href: string;
  platform: string;
};

const SocialLink = ({ href, platform }: Props) => {
  return (
    <a href={href} aria-label={platform} target="_blank">
      <div
        className={`${Styles.linkCard} ${
          platform == "YouTube"
            ? Styles.yt
            : platform == "Facebook"
            ? Styles.fb
            : platform == "Instagram"
            ? Styles.ig
            : platform == "Spotify"
            ? Styles.spotify
            : ""
        }`}
      >
        {platform == "YouTube" ? (
          <FontAwesomeIcon icon={faYoutube} />
        ) : platform == "Facebook" ? (
          <FontAwesomeIcon icon={faFacebookF} />
        ) : platform == "Instagram" ? (
          <FontAwesomeIcon icon={faInstagram} />
        ) : platform == "Spotify" ? (
          <FontAwesomeIcon icon={faSpotify} />
        ) : (
          ""
        )}
      </div>
    </a>
  );
}

type WrapperProps = {
    children: React.ReactNode | undefined;
}

const SocialLinks = ({ children }: WrapperProps) => {
    return(
        <div className={Styles.socialLinks}>
            {children}
        </div>
    )
}

export { SocialLink, SocialLinks };
