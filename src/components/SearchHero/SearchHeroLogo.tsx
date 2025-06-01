import React from 'react';
import indexLogo from '../../assets/icons/index-logo.svg';
import styles from './SearchHero.module.css';

const SearchHeroLogo: React.FC = () => {
  return (
    <img
      src={indexLogo}
      alt="Index Oglasi"
      className={styles.logo}
    />
  );
};

export default SearchHeroLogo;
