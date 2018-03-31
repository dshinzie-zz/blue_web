import React from 'react';
import classNames from 'classnames/bind';
import css from '../../styles/Home/bottom_info.css';


const cx = classNames.bind(css)

const BottomInfo = () => (  
  <div className={cx('bottom-info-container')}>
    <h1 className={cx('bottom-info-header')}>Our 3-Step Process</h1>

    <div className={cx('bottom-info-links')}>
      <div className={cx('bottom-info-link')}>
        <span className={cx('bottom-info-link-img')}></span>
        <p className={cx('bottom-info-link-text')}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
      </div>
      <div className={cx('bottom-info-link')}>
        <span className={cx('bottom-info-link-img')}></span>
        <p className={cx('bottom-info-link-text')}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
      </div>
      <div className={cx('bottom-info-link')}>
        <span className={cx('bottom-info-link-img')}></span>
        <p className={cx('bottom-info-link-text')}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
      </div>
    </div>

    <p className='bottom-info-get-started'>Get Started</p>
  </div>
)


export default BottomInfo