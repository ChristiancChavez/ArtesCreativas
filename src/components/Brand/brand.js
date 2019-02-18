import React from 'react';
import Styles from'./brand.module.scss';
import logo from '../../assets/images/logo.jpg';

const brand = () => (
    <div className={Styles.brand}>
        <img className={Styles.brandLogo} src={logo} alt="logo AC"/>
    </div>
)
export default brand;