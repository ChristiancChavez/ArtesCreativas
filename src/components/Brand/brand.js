import React from 'react';
import Styles from'./brand.module.scss';
import logo from '../../assets/images/logoAC.PNG';

const brand = ({ brandNavigation, logoNavigation, titleNavigation }) => (
    <div className={`${Styles.brand} ${Styles[brandNavigation]}`}>
        <img className={`${Styles.brandLogo} ${Styles[logoNavigation]}`} src={logo} alt="logo AC"/>
        <h1 className={`${Styles.brandTitle} ${Styles[titleNavigation]}`}>Artes Creativas</h1>
    </div>
)
export default brand;