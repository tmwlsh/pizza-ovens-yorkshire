import * as React from "react"

import Logo from "../svgs/logo.svg";

import * as styles from "../sass/home.module.scss";

const IndexPage = () => {
  return (
    <main className={styles.homeOuter}>
      <div className={styles.orangeBlur} />
      <div className={styles.home}>
        <Logo />
      </div>
    </main>
  )
}

export default IndexPage
