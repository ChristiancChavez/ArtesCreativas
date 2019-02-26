import React from 'react';
import close from '../../../../assets/images/close.png';
import SliderOpinion from './SliderOpinion/sliderOpinion';
import { requestOpinionCustomer } from '../../../../Helpers/requestOpinionCustomers';
import Arrows from '../../../Shared/Arrows/arrow';
import styles from './opinion.module.scss';

const opinion = ({ view }) => {
    const renderOpinion = requestOpinionCustomer.map(item => 
        <SliderOpinion item={item} />
    )
    return (
        <div className={styles.opinion}>
            <img className={styles.close} src={close} alt="close"/>
            <span className={styles.title}>¡Que dicen nuestros clientes!</span>
            <span className={styles.line}></span>
            {renderOpinion[view]}
            <Arrows request={requestOpinionCustomer} />
        </div>
        )
}

export default opinion;