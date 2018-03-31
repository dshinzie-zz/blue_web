import React from 'react';
import classNames from 'classnames/bind';
import css from '../../styles/Home/center_info.css';


const cx = classNames.bind(css)

const CenterInfo = () => (  
  <div className={cx('center-info-container')}>
    <h1 className={cx('center-info-header')}>How Wandrblu Travel Works</h1>
    <div className={cx('center-info-line')}></div>
    <p className={cx('center-info-text1')}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
    <p className={cx('center-info-text2')}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
  </div>
)


export default CenterInfo