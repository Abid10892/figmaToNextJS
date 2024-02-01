"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import SideNavbar from "@/components/sideNavbar/SideNavbar";
import TopNav from "@/components/topNav/TopNav";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    alert(
      "Welcome! Please Click on Complete Profile button to see the next page"
    );
  }, []);

  return (
    <>
      <main className={styles.main}>
        <SideNavbar />
        <div className={styles.heroSection}>
          <TopNav />
          <section className={styles.mainBoard}>
            <div className={styles.links}>
              <Link href={"/"} className={styles.link}>
                jMarket
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <mask
                    id="mask0_332_170"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="18"
                    height="18"
                  >
                    <rect width="18" height="18" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_332_170)">
                    <path
                      d="M6.01875 16.5L4.6875 15.1688L10.8563 9L4.6875 2.83125L6.01875 1.5L13.5188 9L6.01875 16.5Z"
                      fill="#7C7C7C"
                    />
                  </g>
                </svg>
              </Link>
              <Link href={"/"} className={styles.link}>
                Category 1
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <mask
                    id="mask0_332_170"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="18"
                    height="18"
                  >
                    <rect width="18" height="18" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_332_170)">
                    <path
                      d="M6.01875 16.5L4.6875 15.1688L10.8563 9L4.6875 2.83125L6.01875 1.5L13.5188 9L6.01875 16.5Z"
                      fill="#7C7C7C"
                    />
                  </g>
                </svg>
              </Link>
              <Link href={"/"} className={styles.link}>
                Theme park site
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <mask
                    id="mask0_332_170"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="18"
                    height="18"
                  >
                    <rect width="18" height="18" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_332_170)">
                    <path
                      d="M6.01875 16.5L4.6875 15.1688L10.8563 9L4.6875 2.83125L6.01875 1.5L13.5188 9L6.01875 16.5Z"
                      fill="#7C7C7C"
                    />
                  </g>
                </svg>
              </Link>
            </div>
            <div className={styles.siteView}>
              <Image
                src={"/siteView.png"}
                width={995}
                height={371}
                alt="site"
                layout="responsive"
              />
            </div>
            <div className={styles.themePark}>
              <div className={styles.details}>
                <h1>Theme Park Site</h1>
                <div>
                  <div className={styles.location}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="21"
                      viewBox="0 0 16 21"
                      fill="none"
                    >
                      <path
                        d="M7 12.5H9V9.5H12V7.5H9V4.5H7V7.5H4V9.5H7V12.5ZM8 17.85C10.0333 15.9833 11.5417 14.2875 12.525 12.7625C13.5083 11.2375 14 9.88333 14 8.7C14 6.88333 13.4208 5.39583 12.2625 4.2375C11.1042 3.07917 9.68333 2.5 8 2.5C6.31667 2.5 4.89583 3.07917 3.7375 4.2375C2.57917 5.39583 2 6.88333 2 8.7C2 9.88333 2.49167 11.2375 3.475 12.7625C4.45833 14.2875 5.96667 15.9833 8 17.85ZM8 20.5C5.31667 18.2167 3.3125 16.0958 1.9875 14.1375C0.6625 12.1792 0 10.3667 0 8.7C0 6.2 0.804167 4.20833 2.4125 2.725C4.02083 1.24167 5.88333 0.5 8 0.5C10.1167 0.5 11.9792 1.24167 13.5875 2.725C15.1958 4.20833 16 6.2 16 8.7C16 10.3667 15.3375 12.1792 14.0125 14.1375C12.6875 16.0958 10.6833 18.2167 8 20.5Z"
                        fill="#1C1B1F"
                      />
                    </svg>
                    <p>Address of the site</p>
                  </div>
                  <div className={styles.tags}>
                    <div className={styles.tag}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <mask
                          id="mask0_332_266"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="16"
                          height="16"
                        >
                          <rect width="16" height="16" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_332_266)">
                          <path
                            d="M7.03329 12.1333L10.4833 8.00001H7.81663L8.29996 4.21668L5.21663 8.66668H7.53329L7.03329 12.1333ZM5.33329 14.6667L5.99996 10H2.66663L8.66663 1.33334H9.99996L9.33329 6.66668H13.3333L6.66663 14.6667H5.33329Z"
                            fill="#1C1B1F"
                          />
                        </g>
                      </svg>
                      <p>Adult rides</p>
                    </div>
                    <div className={styles.tag}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <mask
                          id="mask0_332_151"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="16"
                          height="16"
                        >
                          <rect width="16" height="16" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_332_151)">
                          <path
                            d="M7.99996 14.3333C6.52218 14.3333 5.26385 13.8222 4.22496 12.8C3.18607 11.7777 2.66663 10.5333 2.66663 9.06663C2.66663 8.36663 2.80274 7.69718 3.07496 7.05829C3.34718 6.4194 3.73329 5.85552 4.23329 5.36663L7.99996 1.66663L11.7666 5.36663C12.2666 5.85552 12.6527 6.4194 12.925 7.05829C13.1972 7.69718 13.3333 8.36663 13.3333 9.06663C13.3333 10.5333 12.8138 11.7777 11.775 12.8C10.7361 13.8222 9.47774 14.3333 7.99996 14.3333ZM7.99996 13C9.11107 13 10.0555 12.6194 10.8333 11.8583C11.6111 11.0972 12 10.1666 12 9.06663C12 8.5444 11.9 8.04718 11.7 7.57496C11.5 7.10274 11.2111 6.68885 10.8333 6.33329L7.99996 3.53329L5.16663 6.33329C4.78885 6.68885 4.49996 7.10274 4.29996 7.57496C4.09996 8.04718 3.99996 8.5444 3.99996 9.06663C3.99996 10.1666 4.38885 11.0972 5.16663 11.8583C5.9444 12.6194 6.88885 13 7.99996 13Z"
                            fill="#1C1B1F"
                          />
                        </g>
                      </svg>
                      <p>Family rides</p>
                    </div>
                    <div className={styles.tag}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <mask
                          id="mask0_332_42"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="16"
                          height="16"
                        >
                          <rect width="16" height="16" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_332_42)">
                          <path
                            d="M2.66663 6C2.47774 6 2.3194 5.93611 2.19163 5.80834C2.06385 5.68056 1.99996 5.52222 1.99996 5.33334C1.99996 5.14445 2.06385 4.98611 2.19163 4.85834C2.3194 4.73056 2.47774 4.66667 2.66663 4.66667H4.66663C5.03329 4.66667 5.34718 4.79722 5.60829 5.05834C5.8694 5.31945 5.99996 5.63334 5.99996 6H2.66663ZM3.99996 12C4.55552 12 5.02774 11.8056 5.41663 11.4167C5.80551 11.0278 5.99996 10.5556 5.99996 10C5.99996 9.44445 5.80551 8.97222 5.41663 8.58334C5.02774 8.19445 4.55552 8 3.99996 8C3.4444 8 2.97218 8.19445 2.58329 8.58334C2.1944 8.97222 1.99996 9.44445 1.99996 10C1.99996 10.5556 2.1944 11.0278 2.58329 11.4167C2.97218 11.8056 3.4444 12 3.99996 12ZM13 12C13.2777 12 13.5138 11.9028 13.7083 11.7083C13.9027 11.5139 14 11.2778 14 11C14 10.7222 13.9027 10.4861 13.7083 10.2917C13.5138 10.0972 13.2777 10 13 10C12.7222 10 12.4861 10.0972 12.2916 10.2917C12.0972 10.4861 12 10.7222 12 11C12 11.2778 12.0972 11.5139 12.2916 11.7083C12.4861 11.9028 12.7222 12 13 12ZM3.99996 11C3.72218 11 3.48607 10.9028 3.29163 10.7083C3.09718 10.5139 2.99996 10.2778 2.99996 10C2.99996 9.72222 3.09718 9.48611 3.29163 9.29167C3.48607 9.09722 3.72218 9 3.99996 9C4.27774 9 4.51385 9.09722 4.70829 9.29167C4.90274 9.48611 4.99996 9.72222 4.99996 10C4.99996 10.2778 4.90274 10.5139 4.70829 10.7083C4.51385 10.9028 4.27774 11 3.99996 11ZM13.3333 8.68334C13.6222 8.73889 13.8611 8.81389 14.05 8.90834C14.2388 9.00278 14.4444 9.15556 14.6666 9.36667V5.33334C14.6666 4.96667 14.5361 4.65278 14.275 4.39167C14.0138 4.13056 13.7 4 13.3333 4H9.13329L8.43329 3.26667L9.36663 2.33334L8.89996 1.86667L6.53329 4.23334L7.03329 4.7L7.96663 3.76667L8.66663 4.46667V6C8.66663 6.36667 8.53607 6.68056 8.27496 6.94167C8.01385 7.20278 7.69996 7.33334 7.33329 7.33334H5.98329C6.23885 7.52222 6.4444 7.71667 6.59996 7.91667C6.75552 8.11667 6.91107 8.36667 7.06663 8.66667H7.33329C8.06663 8.66667 8.6944 8.40556 9.21663 7.88334C9.73885 7.36111 9.99996 6.73334 9.99996 6V5.33334H13.3333V8.68334ZM10.6833 10.6667C10.75 10.3667 10.8305 10.125 10.925 9.94167C11.0194 9.75834 11.1666 9.55556 11.3666 9.33334H7.26663C7.31107 9.58889 7.33329 9.81111 7.33329 10C7.33329 10.1889 7.31107 10.4111 7.26663 10.6667H10.6833ZM13 13.3333C12.3555 13.3333 11.8055 13.1056 11.35 12.65C10.8944 12.1944 10.6666 11.6444 10.6666 11C10.6666 10.3556 10.8944 9.80556 11.35 9.35C11.8055 8.89445 12.3555 8.66667 13 8.66667C13.6444 8.66667 14.1944 8.89445 14.65 9.35C15.1055 9.80556 15.3333 10.3556 15.3333 11C15.3333 11.6444 15.1055 12.1944 14.65 12.65C14.1944 13.1056 13.6444 13.3333 13 13.3333ZM3.99996 13.3333C3.07774 13.3333 2.29163 13.0083 1.64163 12.3583C0.991626 11.7083 0.666626 10.9222 0.666626 10C0.666626 9.07778 0.991626 8.29167 1.64163 7.64167C2.29163 6.99167 3.07774 6.66667 3.99996 6.66667C4.92218 6.66667 5.70829 6.99167 6.35829 7.64167C7.00829 8.29167 7.33329 9.07778 7.33329 10C7.33329 10.9222 7.00829 11.7083 6.35829 12.3583C5.70829 13.0083 4.92218 13.3333 3.99996 13.3333Z"
                            fill="#1C1B1F"
                          />
                        </g>
                      </svg>
                      <p>Restaurants</p>
                    </div>
                    <div className={styles.tag}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <mask
                          id="mask0_332_99"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="16"
                          height="16"
                        >
                          <rect width="16" height="16" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_332_99)">
                          <path
                            d="M1.33337 14V4L4.00004 2L6.00004 3.5L8.00004 2L10 3.5L12 2L14.6667 4V14H1.33337ZM2.66671 12.6667H5.33337V4.66667L4.00004 3.66667L2.66671 4.66667V12.6667ZM6.66671 12.6667H9.33337V4.66667L8.00004 3.66667L6.66671 4.66667V12.6667ZM10.6667 12.6667H13.3334V4.66667L12 3.66667L10.6667 4.66667V12.6667Z"
                            fill="#1C1B1F"
                          />
                        </g>
                      </svg>
                      <p>Premium</p>
                    </div>
                  </div>
                </div>
                <Link href={"/"} className={styles.polygonLink}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <mask
                      id="mask0_332_196"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="16"
                      height="16"
                    >
                      <rect width="16" height="16" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_332_196)">
                      <path
                        d="M3.59947 13.3333L2.66614 12.3999L10.3995 4.66662H5.99947V3.33328H12.6661V9.99995H11.3328V5.59995L3.59947 13.3333Z"
                        fill="#4375FB"
                      />
                    </g>
                  </svg>
                  <p>View opportunit on polygon</p>
                </Link>
                <div className={styles.detail}>
                  <div className={styles.detailCols}>
                    <h3>200 Acres</h3>
                    <p>Area</p>
                  </div>
                  <div className={styles.detailCols}>
                    <h3>5 Lakhs</h3>
                    <p>Starting price</p>
                  </div>
                  <div className={styles.detailCols}>
                    <h3>10 days</h3>
                    <p>Remaining Days</p>
                  </div>
                  <div className={styles.detailCols}>
                    <h3>2.5 years</h3>
                    <p>Next check</p>
                  </div>
                </div>
              </div>
              <div className={styles.detailLinks}>
                <Link href={"/about"}>
                  <button className={styles.btn}>Complete</button>
                </Link>
                <button className={`${styles.btn} ${styles.visitBtn}`}>
                  Site visit
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <mask
                      id="mask0_332_250"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="12"
                      height="12"
                    >
                      <rect
                        x="12"
                        y="12"
                        width="12"
                        height="12"
                        transform="rotate(-180 12 12)"
                        fill="#D9D9D9"
                      />
                    </mask>
                    <g mask="url(#mask0_332_250)">
                      <path
                        d="M4 0.999998L9 6L4 11L3.1125 10.1125L7.225 6L3.1125 1.8875L4 0.999998Z"
                        fill="#4375FB"
                      />
                    </g>
                  </svg>
                </button>
                <div className={styles.statusBar}>
                  <h1>Rs 20,00,000</h1>
                  <h5>Rs 65,00,000</h5>
                </div>
                <div className={styles.line}>
                  <span className={styles.blueLine}></span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
