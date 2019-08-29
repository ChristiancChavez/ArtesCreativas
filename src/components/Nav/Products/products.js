import React from 'react';
import styles from './products.module.scss';

const products = () => (
    <section className={styles.products}>
        <h2 className={styles.title}>Productos</h2>
        <div className={styles.product}>Cuadros y Repisas</div>
        <div className={styles.product}>Cojines</div>
        <div className={styles.product}>Cobijas</div>
        <div className={styles.product}>Bustos</div>
    </section>
)
export default products;