import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./styles.module.scss";

const LinkCard = ({image, text, link}) => {
  return (
    <div className={styles.linkCard}>
      <Link to={link}>
        <div className={styles.imageOverlay} />
        <img src={image} alt={`${text.toLowerCase()}`} />
        <p>{text}</p>
      </Link>
    </div>
  )
};

export { LinkCard };
