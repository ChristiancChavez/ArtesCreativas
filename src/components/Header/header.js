import React from 'react';
import Nav from '../Nav/nav';
import Brand from '../Brand/brand';
import Social from '../Social/social';
import styles from './header.module.scss';

const header = () => (
    <div className={styles.header}>
        <Nav />
        <Brand />
        <Social />
    </div>
)
export default header;