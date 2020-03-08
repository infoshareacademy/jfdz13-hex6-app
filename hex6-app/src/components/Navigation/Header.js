import React from "react";
import styles from './Navigation.module.css';
import Logo from './Logo.js';

const Header = () => {
  return (
      <div className={styles.logoContainer}>
      <h1>Hello Andrew!</h1>
        <Logo/>
      </div>
  );
};

export default Header;
