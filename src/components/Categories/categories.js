import React from 'react';
import styles from './categories.module.scss';
import { requestCategories } from '../../Helpers/requestCategories';

const categories = ({ handleOpenGalery }) => {
    const category = requestCategories.map(item => 
        <div className={styles.category} key={item.label}>
            <img className={styles.image} src={require(`../../assets/images/${item.image}.jpg`)} alt={item.label} />
            <span role="button" className={styles.label} onClick={handleOpenGalery}>{item.label}</span>
        </div>   
    )
    return (
        <div className={styles.categories}>
            {category}
        </div>
    )
}
export default categories;