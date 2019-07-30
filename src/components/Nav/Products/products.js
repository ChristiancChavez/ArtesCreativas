import React from 'react';
import styles from './products.module.scss';

const products = () => (
    <section className={styles.background}>
        <div className={styles.products}>
            <h2 className={styles.title}>Productos</h2>
            <h2 className={styles.product}>Cuadros</h2>
            <h2 className={styles.product}>Cojines</h2>
            <h2 className={styles.product}>Cobijas</h2>
            <h2 className={styles.product}>Cortinas</h2>
        </div>
    </section>
)
export default products;