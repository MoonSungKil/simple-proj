import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className={styles.header}>
      <NavLink activeClassName={styles.active} to="/journal">
        <div className={styles.navList}>Journal</div>
      </NavLink>

      <NavLink to="/miniyoutube">
        <div className={styles.navList}>Mini Youtube</div>
      </NavLink>

      <NavLink to="/miniyoutube">
        <div className={styles.navList}>Mini Youtube</div>
      </NavLink>

      <NavLink to="/miniyoutube">
        <div className={styles.navList}>Mini Youtube</div>
      </NavLink>
    </div>
  );
}

export default Header;
