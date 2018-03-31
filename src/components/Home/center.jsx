import React from 'react';
import classNames from 'classnames/bind';
import css from '../../styles/Home/center.css';


const cx = classNames.bind(css)

const Center = () => (  
  <div className={cx('center-container')}>
    <p className={cx('center-header')}>Your Trusted Partner in Travel</p>
    <h1 className={cx('center-subheader')}>Stress Less. Travel More.</h1>
    <div className={cx('center-links')}>
      <p>See Video</p>
      <p>Get Started</p>
    </div>
  </div>
)


export default Center;