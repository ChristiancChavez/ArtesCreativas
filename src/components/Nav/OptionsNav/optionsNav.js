import React from 'react';
import Opinion from './Opinion/opinion';
import Sales from './Sales/sales';
import close from '../../../assets/images/close.png';
import styles from './optionsNav.module.scss';


const optionsNav = () => (
    <div className={styles.optionsNav}>
        <img className={styles.close} src={close} alt="close"/>
        
        <Opinion />
        
        <Sales />
    </div>
)
export default optionsNav;
