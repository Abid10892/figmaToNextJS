import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function OverView() {
  return (
    <>
      <div className={styles.overViewDetail}>
        <div className={styles.overView}>
          <div className={styles.detail}>
            <h1>Overview</h1>
            <p>
              Our AI feature simplifies your life by automating routine tasks.
              Spend more time on the things you love!Our AI feature simplifies
              your life by automating routine tasks. Spend more time on the
              things you love!Our AI feature simplifies your life by automating
              routine tasks. Spend more time on the things you love.
            </p>
          </div>
        </div>
        <div className={styles.overView}>
          <div className={styles.detail}>
            <h1>Why?</h1>
            <p>
              Our AI feature simplifies your life by automating routine tasks.
              Spend more time on the things you love!Our AI feature simplifies
              your life by automating routine tasks. Spend more time on the
              things you love!Our AI feature simplifies your life by automating
              routine tasks. Spend more time on the things you love.
            </p>
          </div>
        </div>
        <div className={styles.overView}>
          <div className={styles.detail}>
            <h1>What?</h1>
            <p>
              Our AI feature simplifies your life by automating routine tasks.
              Spend more time on the things you love!Our AI feature simplifies
              your life by automating routine tasks. Spend more time on the
              things you love!Our AI feature simplifies your life by automating
              routine tasks. Spend more time on the things you love.
            </p>
          </div>
        </div>
        <div className={styles.overView}>
          <div className={styles.detail}>
            <h1>Landmarks</h1>
          </div>
          <div className={styles.landmark}>
            <div className={styles.airport}>
              <div className={styles.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="27"
                  viewBox="0 0 24 27"
                  fill="none"
                >
                  <mask
                    id="mask0_403_388"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="27"
                  >
                    <rect y="0.88916" width="24" height="26" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_403_388)">
                    <path
                      d="M8.5 24.7225V23.0975L10.5 21.4725V15.5141L2 18.2225V16.0558L10.5 10.6391V4.68082C10.5 4.22943 10.6458 3.84575 10.9375 3.52977C11.2292 3.2138 11.5833 3.05582 12 3.05582C12.4167 3.05582 12.7708 3.2138 13.0625 3.52977C13.3542 3.84575 13.5 4.22943 13.5 4.68082V10.6391L22 16.0558V18.2225L13.5 15.5141V21.4725L15.5 23.0975V24.7225L12 23.6391L8.5 24.7225Z"
                      fill="#4375FB"
                    />
                  </g>
                </svg>
                <p>Airport</p>
              </div>
              <div className={styles.distance}>
                <h6>100km</h6>
                <p>Airport 1</p>
              </div>
            </div>
            <hr />
            <div className={styles.airport}>
              <div className={styles.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="27"
                  viewBox="0 0 24 27"
                  fill="none"
                >
                  <mask
                    id="mask0_403_388"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="27"
                  >
                    <rect y="0.88916" width="24" height="26" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_403_388)">
                    <path
                      d="M8.5 24.7225V23.0975L10.5 21.4725V15.5141L2 18.2225V16.0558L10.5 10.6391V4.68082C10.5 4.22943 10.6458 3.84575 10.9375 3.52977C11.2292 3.2138 11.5833 3.05582 12 3.05582C12.4167 3.05582 12.7708 3.2138 13.0625 3.52977C13.3542 3.84575 13.5 4.22943 13.5 4.68082V10.6391L22 16.0558V18.2225L13.5 15.5141V21.4725L15.5 23.0975V24.7225L12 23.6391L8.5 24.7225Z"
                      fill="#4375FB"
                    />
                  </g>
                </svg>
                <p>Airport</p>
              </div>
              <div className={styles.distance}>
                <h6>25km</h6>
                <p>Green Which Terminal</p>
              </div>
            </div>
            <hr />
            <div className={styles.airport}>
              <div className={styles.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="27"
                  viewBox="0 0 24 27"
                  fill="none"
                >
                  <mask
                    id="mask0_403_410"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="27"
                  >
                    <rect y="0.88916" width="24" height="26" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_403_410)">
                    <path
                      d="M18 25.8058V22.5558H15V20.3891H18V17.1391H20V20.3891H23V22.5558H20V25.8058H18ZM18 14.9725V5.22247H20V14.9725H18ZM4 22.5558V5.22247H6V22.5558H4ZM11 9.55581V5.22247H13V9.55581H11ZM11 16.0558V11.7225H13V16.0558H11ZM11 22.5558V18.2225H13V22.5558H11Z"
                      fill="#4375FB"
                    />
                  </g>
                </svg>
                <p>Highway</p>
              </div>
              <div className={styles.distance}>
                <h6>100km</h6>
                <p>Highway number 5</p>
              </div>
            </div>
            <hr />
          </div>
          <div></div>
        </div>
        <div className={styles.overView}>
          <div className={styles.detail}>
            <h1>Map</h1>
            <Image
              src={"/Whyinvest.png"}
              alt="WhyInvest"
              width={447}
              height={266}
              layout="responsive"
            />
            <div className={styles.btn}>
              <button>
                Schedule a call
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
