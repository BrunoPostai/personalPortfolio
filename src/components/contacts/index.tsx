import React from "react";
import styles from "./styles.module.css";
import { Icon } from "@iconify/react";

function Contact() {
  return (
    <div className={styles.divWrapper}>
      <div className={styles.rightWrap}>
        <div className={styles.imageBox}>
        </div>
        <div className={styles.socialMedia}>
          <Icon icon="ri:instagram-fill" color="#3a86df" />
          <Icon icon="ic:baseline-facebook" color="#3a86df" />
          <Icon icon="mdi:linkedin" color="#3a86df" />
          <Icon icon="mingcute:pdf-fill" color="#3a86df" />
        </div>
      </div>
      <div className={styles.leftWrap}>
        <h2 className={styles.contactTitle}>CONTACT ME</h2>
        <p className={styles.contactText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          provident. Quos eius expedita autem obcaecati, ipsam dignissimos hic
          quibusdam nihil ut ea, consequatur architecto! Facilis nam possimus
          unde optio veritatis.
        </p>
      </div>
    </div>
  );
}

export default Contact;
