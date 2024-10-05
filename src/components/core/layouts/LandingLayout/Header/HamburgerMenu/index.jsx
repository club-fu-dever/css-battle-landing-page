import React from 'react';

import styles from './styles.module.scss';

const HamburgerMenuIcon = ({ open }) => {
  return (
    <div className={`${styles['menu-btn']} ${open ? styles['open'] : ''}`}>
      <div className={styles['menu-btn__burger']}></div>
    </div>
  );
};

export default HamburgerMenuIcon;
