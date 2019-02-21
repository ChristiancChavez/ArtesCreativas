import React from 'react';
import { requestOpinionCustomer } from '../../../../Helpers/requestOpinionCustomers';
import arbol from '../../../../assets/images/purpleTree.jpg';
import close from '../../../../assets/images/close.png';
import styles from './opinion.module.scss';

const opinion = () => {
    const opinions = requestOpinionCustomer.map(item =>
        <div className={styles.item}>
            <h2 className={styles.text}>{item.user}</h2>
            <span className={styles.text}>{item.product}</span>
            <img className={styles.image} src={arbol} alt="perro" />
            <p className={styles.description}>"{item.text}"</p>
        </div>
    )
    return (
        <div className={styles.opinion}>
            <img className={styles.close} src={close} alt="close"/>
            <span className={styles.title}>¡Que dicen nuestros clientes!</span>
            <span className={styles.line}></span>
            {opinions[0]}
        </div>
    )
}
export default opinion;