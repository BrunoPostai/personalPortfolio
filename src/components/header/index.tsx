import { Button } from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react";
import styles from "./styles.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <a href="#" className={styles.logo}>
          BP
        </a>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li>
              <a href="#" className={styles.li}>
                PROJECTS
              </a>
            </li>
            <li>
              <a href="#" className={styles.li}>
                ABOUT ME
              </a>
            </li>
            <li id={styles.contato}>
              <button className={styles.btn}>
                <a href="#">CONTACT</a>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <section className={styles.section}>
        <p>
          I AM
          <br />
          <span className={styles.name}>BRUNO POSTAI</span>
          <br /> FRONT-END DEVELOPER
        </p>
      </section>
    </div>
  );
};

export default Header;
