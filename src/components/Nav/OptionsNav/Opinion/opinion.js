import React from 'react';
import { requestOpinionCustomer } from '../../../../Helpers/requestOpinionCustomers';
import arbol from '../../../../assets/images/purpleTree.jpg';
import styles from './opinion.module.scss';

const opinion = () => {
    const opinions = requestOpinionCustomer.map(item =>
        <div className={styles.opinion}>
            <h2 className={styles.text}>{item.user}</h2>
            <span className={styles.text}>{item.product}</span>
            <img className={styles.image} src={arbol} alt="perro" />
            <p className={styles.description}>"{item.text}"</p>
        </div>
    )
    return (
        <div className={`${styles.opinion} ${styles.item}`}>
            <span className={styles.title}>¡Que dicen nuestros clientes!</span>
            {opinions[0]}
        </div>
    )
}
export default opinion;