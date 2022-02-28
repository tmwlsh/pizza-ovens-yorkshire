import * as React from "react";

import * as styles from "./styles.module.scss";

const Container = ({children, size="large"}) => {
  return (
    <div className={`${styles.container} ${styles[size]}`}>
      {children}
    </div>
  )
};

export { Container };
