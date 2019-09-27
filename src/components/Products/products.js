import React from 'react';
import styles from './products.module.scss';

const products = () => (
    <section className={styles.products}>
        <h2 className={styles.title}>Productos</h2>
        <h5 className={styles.product}>Cuadros y Repisas</h5>
        <h5 className={styles.product}>Cojines</h5>
        <h5 className={styles.product}>Cobijas</h5>
        <h5 className={styles.product}>Bustos</h5>
    </section>
)
export default products;