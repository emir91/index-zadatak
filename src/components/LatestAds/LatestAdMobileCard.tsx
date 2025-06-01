import React from 'react';
import styles from './LatestAds.module.css';

interface LatestAdMobileCardProps {
  id: string | number;
  title: string;
  price: number;
  image: string;
  postedTime?: string;
}

const LatestAdMobileCard: React.FC<LatestAdMobileCardProps> = ({
  id,
  title,
  price,
  image,
  postedTime,
}) => {
  return (
    <div className={styles.mobileItem} key={id}>
      <img src={image} alt={title} />
      <div className={styles.mobileInfo}>
        <span className={styles.meta}>
          prije 3 dana
        </span>
        <h3 className={styles.name}>{title}</h3>
        <span className={styles.price}>€ {price.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default LatestAdMobileCard;
