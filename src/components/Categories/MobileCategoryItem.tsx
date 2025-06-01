import React from 'react';
import styles from './Categories.module.css';

interface MobileCategoryItemProps {
  name: string;
  displayName: string;
  count: number;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const MobileCategoryItem: React.FC<MobileCategoryItemProps> = ({
  name,
  displayName,
  count,
  Icon,
}) => {
  return (
    <li className={styles.mobileItem} key={name}>
      <div className={styles.iconWrap}>
        {Icon && <Icon />}
        <span className={styles.mobileDisplayName}>{displayName}</span>
        <span className={styles.mobileCount}>{count.toLocaleString()}</span>
      </div>
      <span className={styles.arrow}>›</span>
    </li>
  );
};

export default MobileCategoryItem;
