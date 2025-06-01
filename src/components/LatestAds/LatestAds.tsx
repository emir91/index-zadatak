import React, { useEffect } from 'react';
import styles from './LatestAds.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLatestAds } from '../../redux/ducks/latestAds/latestAdsSlice';
import { RootState, AppDispatch } from '../../redux/store';
import carImageDesktop from '../../assets/images/automobil-slika-desktop.png';
import carImageMobile from '../../assets/images/automobil-slika-mob.png';
import showMoreArrow from '../../assets/icons/show-more-arrow.svg';
import LatestAdCard from './LatestAdCard';
import LatestAdMobileCard from './LatestAdMobileCard';
import Loading from '../Loading/Loading';
import ErrorMessage from '../Error/ErrorMessage';

const LatestAdsSection: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { latestAds, loading, error } = useSelector((state: RootState) => state.latestAds);

    useEffect(() => {
        dispatch(fetchLatestAds());
    }, [dispatch]);

    if (loading) return <Loading />;
    if (error) return <ErrorMessage message={error}/>;

    return(
        <section className={styles.wrapper}>
        <h2 className={styles.title}>Najnoviji oglasi</h2>
  
        <div className={styles.desktopGrid}>
          {latestAds.map((ad) => (
            <LatestAdCard
              key={ad.id}
              id={ad.id}
              title={ad.title}
              city={ad.city}
              postedTime={ad.postedTime}
              price={ad.price}
              previousPrice={ad.previousPrice}
              summary={ad.summary}
              image={carImageDesktop}
            />
          ))}
        </div>
  
        <div className={styles.mobileList}>
          {latestAds.map((ad) => (
            <LatestAdMobileCard
              key={ad.id}
              id={ad.id}
              title={ad.title}
              price={ad.price}
              image={carImageMobile}
              postedTime={ad.postedTime}
            />
          ))}
        </div>
  
        <div className={styles.showMore}>
          <p className={styles.showMoreText}>Vidi više</p>
          <img src={showMoreArrow} alt="show-more-arrow" />
        </div>
      </section>
  
    )

}

export default LatestAdsSection;