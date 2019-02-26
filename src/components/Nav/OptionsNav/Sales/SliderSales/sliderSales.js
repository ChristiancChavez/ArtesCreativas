import React from 'react';
import styles from './sliderSales.module.scss';

const sliderSales = ({ sale }) => (
    <div className={styles.sales} key={sale.title}>
        <h1 className={styles.name}>{sale.title}</h1>
        <img className={styles.img} src={require(`../../../../../assets/images/${sale.image}.jpg`)} alt={sale.image} />
        <span className={styles.price}>${sale.price}</span>
    </div>
)
export default sliderSales;