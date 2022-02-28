import * as React from "react";
import { Header } from "../header";

import * as styles from "./styles.module.scss";

import "../../sass/basics.scss";

import Pepperoni from "../../svgs/pepperoni.svg";

const Layout = ({children}) => {
  return (
    <div className={styles.layout}>
      <div className={styles.layoutInner}>
        <Pepperoni />
        <Pepperoni />
        <div className={styles.orangeBlur} />
      </div>
      <Header />
      {children}
    </div>
  )
};

export { Layout };
