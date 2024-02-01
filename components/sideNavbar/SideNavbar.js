import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function SideNavbar() {
  return (
    <>
      <nav className={styles.sideNav}>
        <div className={styles.logo}>
          <Image
            src={"/Logo_Back1.png"}
            alt="logo"
            width={58.154}
            height={36.104}
          />
        </div>
        <div className={styles.navOptions}>Cart</div>
        <div className={styles.navOptions}>
          <span>Market</span>
        </div>
        <div className={styles.navOptions}>Settings</div>
        <div className={styles.navOptions}>logout</div>
        <div className={styles.blank}></div>
      </nav>
    </>
  );
}
