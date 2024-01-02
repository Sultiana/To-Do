import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbar_title}>TODO LIST</div>
        <div>
          <Link to="/" className={styles.navbar_item}>
            Home
          </Link>
          <Link to="create" className={styles.navbar_item}>
            Add Task
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
