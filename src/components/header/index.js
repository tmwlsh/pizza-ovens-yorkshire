import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./styles.module.scss";

import { Container } from "../container";

import Logo from "../../svgs/logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container size="large">
        <div className={styles.headerInner}>
          <Logo />
          <ul>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Rentals</Link></li>
            <li><Link to="/">Testimonials</Link></li>
            <li><Link to="/">Blog</Link></li>
          </ul>
          <ul>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </div>
      </Container>
    </header>
  )
};

export { Header };
