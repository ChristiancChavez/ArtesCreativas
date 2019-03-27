import React from 'react';
import Carousel from '../../Carousel/Carousel';
import { requestOpinionCustomer } from '../../../Helpers/requestOpinionCustomers';
import { requestSales } from '../../../Helpers/requestSales';
import close from '../../../assets/images/close.png';
import styles from './optionsNav.module.scss';

const optionsNav = () => (
    <div className={styles.optionsNav}>
        <img className={styles.close} src={close} alt="close"/> 
        <Carousel items={requestOpinionCustomer}  />
        <Carousel items={requestSales} /> 
    </div>
)
export default optionsNav;
