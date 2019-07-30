import React from 'react';
import Nav from '../Nav/nav';
import Brand from '../Brand/brand';
import styles from './header.module.scss';

const header = ({ handleOpenOptionsNav }) => (
    <div className={styles.header}>
        <Nav handleOpenOptionsNav={handleOpenOptionsNav} />
        <Brand />
    </div>
)
export default header;