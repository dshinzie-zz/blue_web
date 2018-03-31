import React from 'react';
import classNames from 'classnames/bind';
import css from '../../styles/Home/top_info.css';


const cx = classNames.bind(css)

const TopInfo = () => (  
  <div className={cx('top-info-container')}>
    <p className={cx('top-info-header')}>Your Trusted Partner in Travel</p>
    <h1 className={cx('top-info-subheader')}>Stress Less. Travel More.</h1>
    <div className={cx('top-info-links')}>
      <p>See Video</p>
      <p>Get Started</p>
    </div>
  </div>
)


export default TopInfo;