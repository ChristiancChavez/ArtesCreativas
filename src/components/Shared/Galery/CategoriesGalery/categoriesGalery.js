import React from 'react';
import styles from './categoriesGalery.module.scss';

const categoriesGalery = ({ showRequestGalery, category }) => (
    <h4 className={styles.galeryTitle} role="button" onClick={showRequestGalery}>{category}</h4>
)

export default categoriesGalery;