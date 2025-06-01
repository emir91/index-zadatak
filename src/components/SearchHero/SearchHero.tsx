import React from 'react';
import styles from './SearchHero.module.css';
import SearchBar from './SearchBar';
import SearchHeroLogo from './SearchHeroLogo';

const SearchHero: React.FC = () => {
  return(
    <section className={styles.hero}>
      <SearchHeroLogo />

      <p className={styles.subtitle}>
        Potpuno besplatni, sada i zauvijek
      </p>
  
      <SearchBar />
    </section>
  )
}

export default SearchHero;