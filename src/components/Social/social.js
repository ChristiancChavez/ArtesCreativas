import React from 'react';
import Styles from'./social.module.scss';
import { requestImagesSocial } from '../../Helpers/requestImagesSocial';

const social = ({ socialIconApp }) => {
    const images = requestImagesSocial.map(item => 
        <img className={`${Styles.socialIcon} ${Styles[socialIconApp]}`} src={require(`../../assets/images/${item.image}.png`)} alt={item.image}/>
    )
    return (
        <div className={Styles.social}>
            {images}
        </div>
    )
}
export default social;