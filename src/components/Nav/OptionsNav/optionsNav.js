import React from 'react';
import Opinion from './Opinion/opinion';
import Sales from './Sales/sales';
import Social from '../../Social/social';

import styles from './optionsNav.module.scss';


const optionsNav = () => (
    <div className={styles.optionsNav}>
    <div className={styles.main}>
        <Opinion />
        <Sales />
        <Social />
    </div>
    </div>
)
export default optionsNav;
