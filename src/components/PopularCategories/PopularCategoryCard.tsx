import React from 'react';
import styles from './PopularCategories.module.css';

interface PopularCategoryCardProps {
  name: string;
  displayName: string;
  count: number;
  gradientColorFrom: string;
  gradientColorTo: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const PopularCategoryCard: React.FC<PopularCategoryCardProps> = ({
  name,
  displayName,
  count,
  gradientColorFrom,
  gradientColorTo,
  Icon,
}) => {
  return (
    <div
      key={name}
      className={styles.card}
      style={{
        background: `linear-gradient(135deg, ${gradientColorFrom}, ${gradientColorTo})`,
      }}
    >
      {Icon && <Icon className={styles.icon} />}
      <span className={styles.label}>{displayName}</span>
      <span className={styles.count}>{count.toLocaleString()} Novih</span>
    </div>
  );
};

export default PopularCategoryCard;
