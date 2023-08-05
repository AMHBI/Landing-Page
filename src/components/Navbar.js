import React, { Component } from 'react';
import styles from "./Navbar.module.css";
import logo from "../images/logo-ROG.png";
import {Link} from "react-router-dom";



class Navbar extends Component {
  render() {
    return (
      <header className={styles.header}>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          <li><Link to="/"> Home Page </Link></li>
          <li><Link to="/products"> Products </Link></li>
          <li><Link to="/"> Contact Us </Link></li>
          <li><Link to="/"> About Us </Link></li>
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
