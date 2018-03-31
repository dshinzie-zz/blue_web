import React from 'react';
import Navbar from './navbar'
import Center from './center'
import classNames from 'classnames/bind';
import css from '../../styles/Home/home.css'


const cx = classNames.bind(css)

const Home = () => (
  <div className={cx('master')}>
    <Navbar/>
    <Center/>
  </div>
)


export default Home;