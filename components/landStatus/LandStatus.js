"use client";
import React, { useState } from "react";
import styles from "./page.module.css";

export default function LandStatus() {
  const [isChecked, setIsChecked] = useState(false);
  const [isStep1Checked, setIsStep1Checked] = useState(false);
  const [isStep2Checked, setIsStep2Checked] = useState(false);
  const [isStep3Checked, setIsStep3Checked] = useState(false);
  return (
    <div className={styles.status}>
      <div className={styles.landStatus}>
        <input
          className={styles.input}
          onChange={() => setIsChecked(!isChecked)}
          type="checkbox"
        />
        <div
          className={`${styles.heading} ${
            isChecked ? "" : styles.checkedHeading
          }`}
        >
          <div className={styles.head}>
            <h2>Complete Profile</h2>
            {isChecked && (
              <>
                <p>Good job!</p>
                <h1>Complete</h1>
              </>
            )}
          </div>
          <div className={styles.completeBtn}>
            {isChecked && <span>12/12/2023</span>}
            <button className={`${isChecked ? styles.checkedBtn : styles.btn}`}>
              {isChecked ? "Download" : "Complete"}
              {isChecked && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                >
                  <mask
                    id="mask0_403_193"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="12"
                    height="13"
                  >
                    <rect y="0.388672" width="12" height="12" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_403_193)">
                    <path
                      d="M2 11.3887V10.3887H10V11.3887H2ZM6 9.38867L2.5 4.88867H4.5V1.38867H7.5V4.88867H9.5L6 9.38867ZM6 7.76367L7.45 5.88867H6.5V2.38867H5.5V5.88867H4.55L6 7.76367Z"
                      fill="#4375FB"
                    />
                  </g>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${styles.landStatus} ${isChecked ? "" : styles.disabled}`}
      >
        <input
          className={styles.input}
          onChange={() => setIsStep1Checked(!isStep1Checked)}
          type="checkbox"
        />
        <div
          className={`${styles.heading} ${
            isStep1Checked ? "" : styles.checkedHeading
          }`}
        >
          <div className={`${styles.head} ${isChecked ? "" : styles.dis}`}>
            <h2>Step 1</h2>
            {isStep1Checked && (
              <>
                <p>5% of total amount</p>
                <h1>Rs 1,00,000</h1>
              </>
            )}
          </div>
          <div className={styles.completeBtn}>
            {isStep1Checked && <span>14/12/2023</span>}
            <button
              className={`${isStep1Checked ? styles.checkedBtn : styles.btn}`}
            >
              {isStep1Checked ? "Receipt" : "Pay"}
              {isStep1Checked && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                >
                  <mask
                    id="mask0_403_193"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="12"
                    height="13"
                  >
                    <rect y="0.388672" width="12" height="12" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_403_193)">
                    <path
                      d="M2 11.3887V10.3887H10V11.3887H2ZM6 9.38867L2.5 4.88867H4.5V1.38867H7.5V4.88867H9.5L6 9.38867ZM6 7.76367L7.45 5.88867H6.5V2.38867H5.5V5.88867H4.55L6 7.76367Z"
                      fill="#4375FB"
                    />
                  </g>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${styles.landStatus} ${
          isStep1Checked ? "" : styles.disabled
        }`}
      >
        <input
          className={styles.input}
          onChange={() => setIsStep2Checked(!isStep2Checked)}
          type="checkbox"
        />
        <div
          className={`${styles.heading} ${
            isStep2Checked ? "" : styles.checkedHeading
          }`}
        >
          <div className={`${styles.head} ${isStep1Checked ? "" : styles.dis}`}>
            <h2>Step 2</h2>
            {isStep2Checked && (
              <>
                <h1>Complete</h1>
              </>
            )}
          </div>
          <div className={styles.completeBtn}>
            {isStep2Checked && <span>15/12/2023</span>}
            <button
              className={`${isStep2Checked ? styles.checkedBtn : styles.btn}`}
            >
              {isStep2Checked ? "Download" : "Pay"}
              {isStep2Checked && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                >
                  <mask
                    id="mask0_403_193"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="12"
                    height="13"
                  >
                    <rect y="0.388672" width="12" height="12" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_403_193)">
                    <path
                      d="M2 11.3887V10.3887H10V11.3887H2ZM6 9.38867L2.5 4.88867H4.5V1.38867H7.5V4.88867H9.5L6 9.38867ZM6 7.76367L7.45 5.88867H6.5V2.38867H5.5V5.88867H4.55L6 7.76367Z"
                      fill="#4375FB"
                    />
                  </g>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${styles.landStatus} ${
          isStep2Checked ? "" : styles.disabled
        }`}
      >
        <input
          className={styles.input}
          onChange={() => setIsStep3Checked(!isStep3Checked)}
          type="checkbox"
        />
        <div
          className={`${styles.heading} ${
            isStep3Checked ? "" : styles.checkedHeading
          }`}
        >
          <div className={`${styles.head} ${isStep2Checked ? "" : styles.dis}`}>
            <h2>Step 3</h2>
            {isStep3Checked && (
              <>
                <p>We will get back yo you in 3 months</p>
                <h1>Complete</h1>
              </>
            )}
          </div>
          <div className={styles.completeBtn}>
            {isStep3Checked && <span>16/12/2023</span>}
            <button
              className={`${isStep3Checked ? styles.checkedBtn : styles.btn}`}
            >
              {isStep3Checked ? "Download" : "Pay"}
              {isStep3Checked && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                >
                  <mask
                    id="mask0_403_193"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="12"
                    height="13"
                  >
                    <rect y="0.388672" width="12" height="12" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_403_193)">
                    <path
                      d="M2 11.3887V10.3887H10V11.3887H2ZM6 9.38867L2.5 4.88867H4.5V1.38867H7.5V4.88867H9.5L6 9.38867ZM6 7.76367L7.45 5.88867H6.5V2.38867H5.5V5.88867H4.55L6 7.76367Z"
                      fill="#4375FB"
                    />
                  </g>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${styles.landStatus} ${styles.disabled}`}>
        <input
          className={styles.input}
          onChange={() => setIsStep3Checked(!isStep3Checked)}
          type="checkbox"
        />
        <div className={`${styles.heading}`}>
          <div className={styles.head}>
            <h2>Step 4</h2>
          </div>
          <div className={styles.completeBtn}>
            <button className={`${styles.btn}`}>Complete</button>
          </div>
        </div>
      </div>
      <div className={`${styles.landStatus} ${styles.disabled}`}>
        <input
          className={styles.input}
          onChange={() => setIsStep3Checked(!isStep3Checked)}
          type="checkbox"
        />
        <div className={`${styles.heading}`}>
          <div className={styles.head}>
            <h2>Step 5</h2>
          </div>
          <div className={styles.completeBtn}>
            <button className={`${styles.btn}`}>Complete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
