import React from 'react';
import styles from './LatestAds.module.css';

interface AdSummary {
  makeYear: string;
  mileage: number;
  fuelType: string;
  power: number;
}

interface LatestAdCardProps {
  id: string | number;
  title: string;
  city: string;
  postedTime: string;
  price: number;
  previousPrice?: number | null;
  summary: AdSummary;
  image: string;
}

const LatestAdCard: React.FC<LatestAdCardProps> = ({
  id,
  title,
  city,
  postedTime,
  price,
  previousPrice,
  summary,
  image,
}) => {
  return (
    <div className={styles.card} key={id}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <span className={styles.meta}>
          {new Date(postedTime).toLocaleDateString('hr-HR')} | {city}
        </span>
        <h5 className={styles.name}>{title}</h5>
        <p className={styles.details}>
          {new Date(summary.makeYear).getFullYear()} •{' '}
          {summary.mileage.toLocaleString()} km • {summary.fuelType} •{' '}
          {summary.power} kW
        </p>
        <p className={styles.price}>€ {price.toLocaleString()}</p>
        {previousPrice && (
          <span className={styles.oldPrice}>
            ~{Math.round(previousPrice * 7.5345).toLocaleString()} kn
          </span>
        )}
      </div>
    </div>
  );
};

export default LatestAdCard;
