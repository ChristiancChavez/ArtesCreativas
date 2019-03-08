import React from 'react';
import madrid from '../../../../../assets/images/cities/RioJaneiro.jpg';
import close from '../../../../../assets/images/closegalery.png';
import styles from './ExpandImage.module.scss';

const expandImage = ({ handleCloseImageShowed }) => (
    <div className={styles.background}>
        <img className={styles.close} src={close} alt='close' onClick={handleCloseImageShowed} />
        <div className={styles.expand}>
            <img className={styles.expandImg} src={madrid} alt="madrid" />
            <span className={styles.expandCode}>madrid</span>
        </div>
        <button className={styles.desire}>QUIERO COMPRAR</button>
    </div>
)
export default expandImage;
