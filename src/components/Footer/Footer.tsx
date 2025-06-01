import React from 'react';
import styles from './Footer.module.css';
import indexLogo from '../../assets/icons/index-logo.svg';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
  <div className={styles.grid}>
    {/* Column 1: Logo */}
    <div className={styles.logoBlock}>
      <img src={indexLogo} alt="Index Oglasi" className={styles.logo} />
    </div>

    {/* Column 2: Phone + Working Hours */}
    <div className={styles.infoBlock}>
      <div>
        <p className={styles.label}>Trebate pomoć?</p>
        <p className={styles.strong}>01/549 4478</p>
      </div>
      <div>
        <p className={styles.label}>Radno vrijeme</p>
        <p className={styles.strong}>Svaki dan 8–24h</p>
      </div>
    </div>

    {/* Column 3: Email */}
    <div className={styles.infoBlock}>
      <div>
        <p className={styles.label}>E-mail</p>
        <p className={styles.strong}>indexoglasi@margon.hr</p>
      </div>
    </div>

    {/* Column 4: Links Left */}
    <div className={styles.linkBlock}>
      <ul>
        <li>Uvjeti korištenja</li>
        <li>Oglašavanje</li>
        <li>Upute za korištenje</li>
        <li>FAQ</li>
      </ul>
    </div>

    {/* Column 5: Links Right */}
    <div className={styles.linkBlock}>
      <ul>
        <li>Pravila o privatnosti</li>
        <li>Upute za postavljanje videa</li>
        <li>Index.hr</li>
      </ul>
    </div>
  </div>

  <div className={styles.copy}>Index Oglasi Copyright © 2021</div>
</footer>

    );
  };
  
  export default Footer;
  