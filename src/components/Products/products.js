import React from 'react';
import styles from './products.module.scss';

const products = () => (
    <section className={styles.products}>
        <h2 className={styles.title}>Productos</h2>
        <h5 role="button" className={styles.product}>Bustos</h5>
        <h5 role="button" className={styles.product}>Cobijas</h5>
        <h5 role="button" className={styles.product}>Cojines</h5>
        <h5 role="button" className={styles.product}>Cuadros</h5>
        <h5 role="button" className={styles.product}>Repisas</h5>
    </section>
)
export default products;