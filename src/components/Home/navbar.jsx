import React from 'react';
import classNames from 'classnames/bind';
import css from '../../styles/Home/navbar.css';


const cx = classNames.bind(css)

const Navbar = () => (  
  <div className={cx('nav-bar')}>
    <div className={cx('nav-bar-logo')}>
      <span>wandrblu</span>
      <span>travel</span>
    </div>
    <div className={cx('nav-bar-links')}>
      <span>Home</span>
      <span>What We Do</span>
      <span>Why Us?</span>
      <span>Travel Resources</span>
      <span>Shop</span>
      <span>Login</span>
    </div>
  </div>
)


export default Navbar;