import React from 'react';
import Opinion from './Opinion/opinion';
import Sales from './Sales/sales';
import Social from '../../Social/social';
import styles from './optionsNav.module.scss';

const optionsNav = ({ view }) => (
    <div className={styles.optionsNav}>
        <Opinion view={view} />
        <Sales view={view} />
        <Social />
    </div>
)
export default optionsNav;
