import React from 'react';
import { requestSales } from '../../../../Helpers/requestSales';
import styles from './sales.module.scss';

const sales = () =>  {
    const renderSales = requestSales.map(sale => 
        <div className={styles.sales}>
            <h1 className={styles.name}>{sale.title}</h1>
            <img className={styles.img} src={require(`../../../../assets/images/${sale.image}.jpg`)} alt={sale.image} />
            <span className={styles.price}>${sale.price}</span>
        </div>

    )
    return (
        <div className={styles.background}>
            <span className={styles.title}>Nuestras Promociones</span>
            <span className={styles.line}></span>
            {renderSales[0]}
        </div>
    )
}
export default sales;