import React from 'react';
import { requestSales } from '../../../../Helpers/requestSales';
import Arrows from '../../../Shared/Arrows/arrow';
import SliderSales from './SliderSales/sliderSales';
import styles from './sales.module.scss';

const sales = ({ view }) =>  {
    const renderSales = requestSales.map(sale => 
        <SliderSales sale={sale} />
    )
    return (
        <div className={styles.background}>
            <span className={styles.title}>Nuestras Promociones</span>
            <span className={styles.line}></span>
            {renderSales[view]}
            <Arrows request={requestSales}  />
        </div>
    )
}
export default sales;