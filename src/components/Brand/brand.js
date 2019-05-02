import React from 'react';
import Styles from'./brand.module.scss';
import logo from '../../assets/images/logo.jpg';

const brand = ({ brandNavigation, logoNavigation }) => (
    <div className={`${Styles.brand} ${Styles[brandNavigation]}`}>
        <img className={`${Styles.brandLogo} ${Styles[logoNavigation]}`} src={logo} alt="logo AC"/>
    </div>
)
export default brand;