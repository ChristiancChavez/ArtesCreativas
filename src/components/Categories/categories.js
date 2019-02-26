import React from 'react';
import styles from './categories.module.scss';
import { requestCategories } from '../../Helpers/requestCategories';

const categories = () => {
    const category = requestCategories.map(item => 
        <div className={styles.category} key={item.label}>
            <img className={styles.image} src={require(`../../assets/images/${item.image}.jpg`)} alt={item.label} />
            <span className={styles.label}>{item.label}</span>
        </div>   
    )
    return (
        <div className={styles.categories}>
            {category}
        </div>
    )
}
export default categories;