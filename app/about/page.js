import React from "react";
import styles from "./page.module.css";
import LandStatus from "@/components/landStatus/LandStatus";
import OverView from "@/components/overView/OverView";

export default function page() {
  return (
    <div className={styles.main}>
      <OverView />
      <LandStatus />
    </div>
  );
}
