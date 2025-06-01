import React from 'react';
import SearchHero from '../../components/SearchHero/SearchHero';
import PopularCategories from '../../components/PopularCategories/PopularCategories';
import Categories from '../../components/Categories/Categories';
import LatestAds from '../../components/LatestAds/LatestAds'
import Statistics from '../../components/Statistics/Statistics';
import Footer from '../../components/Footer/Footer';

const HomePage: React.FC = () => {
    return (
      <main>
        <SearchHero />
        <PopularCategories />
        <Categories />
        <LatestAds />
        <Statistics />
        <Footer />
      </main>
    );
  };
  
export default HomePage;