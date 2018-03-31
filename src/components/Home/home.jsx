import React from 'react';
import Navbar from './navbar';
import TopInfo from './top_info';
import CenterInfo from './center_info';
import BottomInfo from './bottom_info';
import classNames from 'classnames/bind';
import css from '../../styles/Home/home.css';


const cx = classNames.bind(css)

const Home = () => (
  <div className={cx('master')}>
    <Navbar/>
    <TopInfo/>
    <CenterInfo/>
    <BottomInfo/>
  </div>
)


export default Home;