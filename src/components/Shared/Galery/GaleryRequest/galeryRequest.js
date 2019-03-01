import React from 'react';
import close from '../../../../assets/images/closegalery.png';
import { requestGaleryCities } from '../../../../Helpers/requestGaleryCities';
import styles from './galeryRequest.module.scss';

const galeryRequest = () => {
    const requestImages = requestGaleryCities.map(city =>{
        return  <div className={styles.content}>
                    <img className={styles.img} src={require(`../../../../assets/images/cities/${city.city}.jpg`)} alt={city.city} />
                    <span className={styles.code}>{city.city}</span>
                </div>
    })
    return (
        <main className={styles.request}>
            <img className={styles.close} src={close} alt='close'/>
            {requestImages}
        </main>
    )
}
export default galeryRequest;