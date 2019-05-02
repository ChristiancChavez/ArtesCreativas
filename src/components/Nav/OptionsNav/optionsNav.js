import React from 'react';
import Carousel from '../../Carousel/Carousel';
import { requestOpinionCustomer } from '../../../Helpers/requestOpinionCustomers';
import { requestSales } from '../../../Helpers/requestSales';
import close from '../../../assets/images/close.png';
import styles from './optionsNav.module.scss';
const titleOpinion = "¡Que dicen nuestros clientes!";
const titleSales = "¡Promociones para ti!";

const optionsNav = ({ handleCloseOptionsNav }) => (
    
    <div className={styles.optionsNav}>
        <img role="button" className={styles.close} src={close} alt="close" onClick={handleCloseOptionsNav} /> 
        <Carousel items={requestOpinionCustomer}  titleCarousel={titleOpinion} />
        <Carousel items={requestSales} titleCarousel={titleSales} /> 
    </div>
)
export default optionsNav;
