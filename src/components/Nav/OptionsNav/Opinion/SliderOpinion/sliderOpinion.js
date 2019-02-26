import React from 'react';
import styles from './sliderOpinion.module.scss';


const SliderOpinion = ({ item }) => (
        <div className={styles.item}>
            <h2 className={styles.text}>{item.user}</h2>
            <span className={styles.text}>{item.product}</span>
            <img className={styles.image} src={require(`../../../../../assets/images/${item.photo}.jpg`)} alt={item.photo} />
            <p className={styles.description}>"{item.text}"</p>
        </div>
)
export default SliderOpinion;

