import React from 'react';
import './style.css';
import styles from './mystyle.module.css';

export default function Css() {
  return (
    <>
      <h1 style={{color: '#C2782D'}}>Inline CSS</h1>
      <h1 className='myh1'>External CSS</h1>
      <h1 className='global_css'>Global CSS</h1>
      <h1 className={styles.my_module}>Module Css</h1>
    </>
  )
}
