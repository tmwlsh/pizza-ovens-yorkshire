import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./styles.module.scss";

import { Container } from "../container";

const HomeIntro = () => {
  return (
    <div className={styles.homeIntro}>
      <Container size="small">
        <h2>Pizza Oven Rental Service</h2>
        <h1>Homemade Pizza, Made by you.</h1>
        <Link to="/">Book Now</Link>
      </Container>
    </div>
  )
};

export { HomeIntro };
