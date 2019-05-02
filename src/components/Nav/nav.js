import React from 'react';
import styles from './nav.module.scss';

const nav = ({ handleOpenOptionsNav }) => (
    <div className={styles.nav} onClick={handleOpenOptionsNav}>
        <span className={styles.line} />
        <span className={styles.line} />
        <span className={styles.line} />
    </div>
)
export default nav;