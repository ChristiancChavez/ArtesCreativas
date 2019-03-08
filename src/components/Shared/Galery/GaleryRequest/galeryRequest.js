import React from 'react';
import close from '../../../../assets/images/closegalery.png';
import { requestGaleryCities } from '../../../../Helpers/requestGaleryCities';
import ExpandImage from './ExpandImage/ExpandImage';
import styles from './galeryRequest.module.scss';

const galeryRequest = ({ handleCloseGaleryShowed, expandImageGalery, expandImage, handleCloseImageShowed }) => {
    const requestImages = requestGaleryCities.map(city =>{
        return  <div className={styles.content}>
                    <img className={styles.img} src={require(`../../../../assets/images/cities/${city.city}.jpg`)} alt={city.city} onClick={expandImageGalery}  />
                    <span className={styles.code}>{city.city}</span>
                </div>
    })
    return (
        <main className={styles.request}>
            <img className={styles.close} src={close} alt='close' onClick={handleCloseGaleryShowed} />
            {requestImages}
            {expandImage && <ExpandImage handleCloseImageShowed={handleCloseImageShowed} />}
        </main>
    )
}
export default galeryRequest;