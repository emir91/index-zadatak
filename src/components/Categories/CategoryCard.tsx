import React from 'react';
import styles from './Categories.module.css';

interface CategoryCardProps {
  name: string;
  displayName: string;
  count: number;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, displayName, count, Icon }) => {
  return (
    <div className={styles.card} key={name}>
      <div className={styles.cardText}>
        {Icon && <Icon />}
        <p>{displayName}</p>
        <span>{count.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default CategoryCard;
