import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function TopNav() {
  return (
    <>
      <nav className={styles.topNav}>
        <Link href={"/about"}>
          <button className={styles.btn}>Complete Profile</button>
        </Link>
        <Image src={"/Icon.svg"} width={23} height={22} alt="icon" />
      </nav>
      <nav className={styles.afterNav}>
        <h2>Choose your new site</h2>
        <div className={styles.sites}>
          <div className={styles.site1}>
            <div className={`${styles.active} ${styles.focus}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <circle cx="6" cy="6" r="6" fill="black" />
                <path
                  d="M3.36267 5.41741L4.52785 7.35938L9.18856 4.64062"
                  stroke="#4374FB"
                  stroke-width="1.5"
                />
              </svg>
              <p>1</p>
            </div>
            <span className={styles.underline}></span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="76"
            height="4"
            viewBox="0 0 76 4"
            fill="none"
            className={styles.arrow}
          >
            <path
              d="M76 2L74.75 1.27831V2.72169L76 2ZM0 2.125H0.5V1.875H0V2.125ZM1.5 2.125H2.5V1.875H1.5V2.125ZM3.5 2.125H4.5V1.875H3.5V2.125ZM5.5 2.125H6.5V1.875H5.5V2.125ZM7.5 2.125H8.5V1.875H7.5V2.125ZM9.5 2.125H10.5V1.875H9.5V2.125ZM11.5 2.125H12.5V1.875H11.5V2.125ZM13.5 2.125H14.5V1.875H13.5V2.125ZM15.5 2.125H16.5V1.875H15.5V2.125ZM17.5 2.125H18.5V1.875H17.5V2.125ZM19.5 2.125H20.5V1.875H19.5V2.125ZM21.5 2.125H22.5V1.875H21.5V2.125ZM23.5 2.125H24.5V1.875H23.5V2.125ZM25.5 2.125H26.5V1.875H25.5V2.125ZM27.5 2.125H28.5V1.875H27.5V2.125ZM29.5 2.125H30.5V1.875H29.5V2.125ZM31.5 2.125H32.5V1.875H31.5V2.125ZM33.5 2.125H34.5V1.875H33.5V2.125ZM35.5 2.125H36.5V1.875H35.5V2.125ZM37.5 2.125H38.5V1.875H37.5V2.125ZM39.5 2.125H40.5V1.875H39.5V2.125ZM41.5 2.125H42.5V1.875H41.5V2.125ZM43.5 2.125H44.5V1.875H43.5V2.125ZM45.5 2.125H46.5V1.875H45.5V2.125ZM47.5 2.125H48.5V1.875H47.5V2.125ZM49.5 2.125H50.5V1.875H49.5V2.125ZM51.5 2.125H52.5V1.875H51.5V2.125ZM53.5 2.125H54.5V1.875H53.5V2.125ZM55.5 2.125H56.5V1.875H55.5V2.125ZM57.5 2.125H58.5V1.875H57.5V2.125ZM59.5 2.125H60.5V1.875H59.5V2.125ZM61.5 2.125H62.5V1.875H61.5V2.125ZM63.5 2.125H64.5V1.875H63.5V2.125ZM65.5 2.125H66.5V1.875H65.5V2.125ZM67.5 2.125H68.5V1.875H67.5V2.125ZM69.5 2.125H70.5V1.875H69.5V2.125ZM71.5 2.125H72.5V1.875H71.5V2.125ZM73.5 2.125H74.5V1.875H73.5V2.125ZM76 2L73.5 0.556624V3.44338L76 2ZM0 2.25H0.5V1.75H0V2.25ZM1.5 2.25H2.5V1.75H1.5V2.25ZM3.5 2.25H4.5V1.75H3.5V2.25ZM5.5 2.25H6.5V1.75H5.5V2.25ZM7.5 2.25H8.5V1.75H7.5V2.25ZM9.5 2.25H10.5V1.75H9.5V2.25ZM11.5 2.25H12.5V1.75H11.5V2.25ZM13.5 2.25H14.5V1.75H13.5V2.25ZM15.5 2.25H16.5V1.75H15.5V2.25ZM17.5 2.25H18.5V1.75H17.5V2.25ZM19.5 2.25H20.5V1.75H19.5V2.25ZM21.5 2.25H22.5V1.75H21.5V2.25ZM23.5 2.25H24.5V1.75H23.5V2.25ZM25.5 2.25H26.5V1.75H25.5V2.25ZM27.5 2.25H28.5V1.75H27.5V2.25ZM29.5 2.25H30.5V1.75H29.5V2.25ZM31.5 2.25H32.5V1.75H31.5V2.25ZM33.5 2.25H34.5V1.75H33.5V2.25ZM35.5 2.25H36.5V1.75H35.5V2.25ZM37.5 2.25H38.5V1.75H37.5V2.25ZM39.5 2.25H40.5V1.75H39.5V2.25ZM41.5 2.25H42.5V1.75H41.5V2.25ZM43.5 2.25H44.5V1.75H43.5V2.25ZM45.5 2.25H46.5V1.75H45.5V2.25ZM47.5 2.25H48.5V1.75H47.5V2.25ZM49.5 2.25H50.5V1.75H49.5V2.25ZM51.5 2.25H52.5V1.75H51.5V2.25ZM53.5 2.25H54.5V1.75H53.5V2.25ZM55.5 2.25H56.5V1.75H55.5V2.25ZM57.5 2.25H58.5V1.75H57.5V2.25ZM59.5 2.25H60.5V1.75H59.5V2.25ZM61.5 2.25H62.5V1.75H61.5V2.25ZM63.5 2.25H64.5V1.75H63.5V2.25ZM65.5 2.25H66.5V1.75H65.5V2.25ZM67.5 2.25H68.5V1.75H67.5V2.25ZM69.5 2.25H70.5V1.75H69.5V2.25ZM71.5 2.25H72.5V1.75H71.5V2.25ZM73.5 2.25H74.5V1.75H73.5V2.25Z"
              fill="black"
              fill-opacity="0.25"
            />
          </svg>
          <div className={styles.site1}>
            <div className={styles.active}>
              <p>2</p>
            </div>
            <span></span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="76"
            height="4"
            viewBox="0 0 76 4"
            fill="none"
            className={styles.arrow}
          >
            <path
              d="M76 2L74.75 1.27831V2.72169L76 2ZM0 2.125H0.5V1.875H0V2.125ZM1.5 2.125H2.5V1.875H1.5V2.125ZM3.5 2.125H4.5V1.875H3.5V2.125ZM5.5 2.125H6.5V1.875H5.5V2.125ZM7.5 2.125H8.5V1.875H7.5V2.125ZM9.5 2.125H10.5V1.875H9.5V2.125ZM11.5 2.125H12.5V1.875H11.5V2.125ZM13.5 2.125H14.5V1.875H13.5V2.125ZM15.5 2.125H16.5V1.875H15.5V2.125ZM17.5 2.125H18.5V1.875H17.5V2.125ZM19.5 2.125H20.5V1.875H19.5V2.125ZM21.5 2.125H22.5V1.875H21.5V2.125ZM23.5 2.125H24.5V1.875H23.5V2.125ZM25.5 2.125H26.5V1.875H25.5V2.125ZM27.5 2.125H28.5V1.875H27.5V2.125ZM29.5 2.125H30.5V1.875H29.5V2.125ZM31.5 2.125H32.5V1.875H31.5V2.125ZM33.5 2.125H34.5V1.875H33.5V2.125ZM35.5 2.125H36.5V1.875H35.5V2.125ZM37.5 2.125H38.5V1.875H37.5V2.125ZM39.5 2.125H40.5V1.875H39.5V2.125ZM41.5 2.125H42.5V1.875H41.5V2.125ZM43.5 2.125H44.5V1.875H43.5V2.125ZM45.5 2.125H46.5V1.875H45.5V2.125ZM47.5 2.125H48.5V1.875H47.5V2.125ZM49.5 2.125H50.5V1.875H49.5V2.125ZM51.5 2.125H52.5V1.875H51.5V2.125ZM53.5 2.125H54.5V1.875H53.5V2.125ZM55.5 2.125H56.5V1.875H55.5V2.125ZM57.5 2.125H58.5V1.875H57.5V2.125ZM59.5 2.125H60.5V1.875H59.5V2.125ZM61.5 2.125H62.5V1.875H61.5V2.125ZM63.5 2.125H64.5V1.875H63.5V2.125ZM65.5 2.125H66.5V1.875H65.5V2.125ZM67.5 2.125H68.5V1.875H67.5V2.125ZM69.5 2.125H70.5V1.875H69.5V2.125ZM71.5 2.125H72.5V1.875H71.5V2.125ZM73.5 2.125H74.5V1.875H73.5V2.125ZM76 2L73.5 0.556624V3.44338L76 2ZM0 2.25H0.5V1.75H0V2.25ZM1.5 2.25H2.5V1.75H1.5V2.25ZM3.5 2.25H4.5V1.75H3.5V2.25ZM5.5 2.25H6.5V1.75H5.5V2.25ZM7.5 2.25H8.5V1.75H7.5V2.25ZM9.5 2.25H10.5V1.75H9.5V2.25ZM11.5 2.25H12.5V1.75H11.5V2.25ZM13.5 2.25H14.5V1.75H13.5V2.25ZM15.5 2.25H16.5V1.75H15.5V2.25ZM17.5 2.25H18.5V1.75H17.5V2.25ZM19.5 2.25H20.5V1.75H19.5V2.25ZM21.5 2.25H22.5V1.75H21.5V2.25ZM23.5 2.25H24.5V1.75H23.5V2.25ZM25.5 2.25H26.5V1.75H25.5V2.25ZM27.5 2.25H28.5V1.75H27.5V2.25ZM29.5 2.25H30.5V1.75H29.5V2.25ZM31.5 2.25H32.5V1.75H31.5V2.25ZM33.5 2.25H34.5V1.75H33.5V2.25ZM35.5 2.25H36.5V1.75H35.5V2.25ZM37.5 2.25H38.5V1.75H37.5V2.25ZM39.5 2.25H40.5V1.75H39.5V2.25ZM41.5 2.25H42.5V1.75H41.5V2.25ZM43.5 2.25H44.5V1.75H43.5V2.25ZM45.5 2.25H46.5V1.75H45.5V2.25ZM47.5 2.25H48.5V1.75H47.5V2.25ZM49.5 2.25H50.5V1.75H49.5V2.25ZM51.5 2.25H52.5V1.75H51.5V2.25ZM53.5 2.25H54.5V1.75H53.5V2.25ZM55.5 2.25H56.5V1.75H55.5V2.25ZM57.5 2.25H58.5V1.75H57.5V2.25ZM59.5 2.25H60.5V1.75H59.5V2.25ZM61.5 2.25H62.5V1.75H61.5V2.25ZM63.5 2.25H64.5V1.75H63.5V2.25ZM65.5 2.25H66.5V1.75H65.5V2.25ZM67.5 2.25H68.5V1.75H67.5V2.25ZM69.5 2.25H70.5V1.75H69.5V2.25ZM71.5 2.25H72.5V1.75H71.5V2.25ZM73.5 2.25H74.5V1.75H73.5V2.25Z"
              fill="black"
              fill-opacity="0.25"
            />
          </svg>
          <div className={styles.site1}>
            <div className={styles.active}>
              <p>3</p>
            </div>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  );
}
