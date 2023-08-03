import React, { Component } from 'react';
import styles from "./Navbar.module.css";
import logo from "../images/logo-ROG.png"



class Navbar extends Component {
  render() {
    return (
      <header className={styles.header}>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          <li>Home Page</li>
          <li>Products</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className={styles.logo}>
          <img  src={logo} className={styles.logo} alt="" />

      </div>
    </header>
    );
  }
}

export default Navbar;
