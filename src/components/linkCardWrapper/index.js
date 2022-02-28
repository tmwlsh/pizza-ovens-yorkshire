import * as React from "react";
import * as styles from "./styles.module.scss";

import { Container } from "../container";

const LinkCardWrapper = ({children}) => {
  return (
    <div className={styles.linkCardWrapper}>
      <Container size="medium">
        <div className={styles.linkCardWrapperInner}>
          {children}
        </div>
      </Container>
    </div>
  )
};

export { LinkCardWrapper };
