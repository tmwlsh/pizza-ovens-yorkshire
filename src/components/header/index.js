import * as React from "react";
import * as styles from "./styles.module.scss";

import { Container } from "../container";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container size="large">
        <h1>Header</h1>
      </Container>
    </header>
  )
};

export { Header };
