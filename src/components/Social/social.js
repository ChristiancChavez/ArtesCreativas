import React from 'react';
import Styles from'./social.module.scss';
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import whatsapp from '../../assets/images/whatsapp.png';

const social = () => (
    <div className={Styles.social}>
        <img className={Styles.socialIcon} src={facebook} alt="facebook"/>
        <img className={Styles.socialIcon} src={instagram} alt="instagram"/>
        <img className={Styles.socialIcon} src={whatsapp} alt="whatsapp"/>
    </div>
)
export default social;