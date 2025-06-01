import React, { useState } from 'react';
import styles from './SearchHero.module.css';
import searchIcon from '../../assets/icons/search-icon.svg';

const SearchBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Upišite pojam..."
        className={styles.searchInput}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button className={styles.searchButton} aria-label="Pretraga">
        <img src={searchIcon} alt="Search" className={styles.searchIcon} />
      </button>
    </div>
  );
};

export default SearchBar;
