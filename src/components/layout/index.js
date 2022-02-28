import * as React from "react";
import { Header } from "../header";

import * as styles from "./styles.module.scss";

import "../../sass/basics.scss";

const Layout = ({children}) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  )
};

export { Layout };
