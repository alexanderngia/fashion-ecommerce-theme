import { ChevronDown } from 'components/ui/icons';
import React, { MouseEventHandler } from 'react';
import styles from './index.module.scss';

interface FilterProps {
  title?: string;
  onClick?: MouseEventHandler;
}

const Filter: React.FC<FilterProps> = ({ title, onClick }) => {
  return (
    <div className={styles["root"]} onClick={onClick}>
      <p>{title}</p>
      <ChevronDown customClass={styles["arrow"]} />
    </div>
  );
};

export default Filter;
