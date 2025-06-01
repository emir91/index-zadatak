import React from 'react';
import styles from './Statistics.module.css';

interface StatsCardProps {
  icon: string;
  label: string;
  value: number | undefined;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon, label, value }) => {
  return (
    <div className={styles.card} key={label}>
      <img src={icon} alt={label} />
      <div className={styles.value}>{value?.toLocaleString()}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};

export default StatsCard;
