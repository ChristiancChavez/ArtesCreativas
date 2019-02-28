import React from 'react';
import close from '../../../assets/images/closegalery.png';
import styles from './galery.module.scss';

const galery = () => (
    <div className={styles.background}>
        <div className={styles.header}>
            <h1 className={styles.headerTitle}>Cuadros en Vidrio</h1>
            <img className={styles.headerClose} src={close} alt='close'/>
        </div>
        <main className={styles.galery}>
            <h4 className={styles.galeryTitle}>Ciudades</h4>
            <h4 className={styles.galeryTitle}>Naturaleza</h4>
            <h4 className={styles.galeryTitle}>Animales</h4>
            <h4 className={styles.galeryTitle}>Abstractos</h4>
            <h4 className={styles.galeryTitle}>Video Juegos</h4>
            <h4 className={styles.galeryTitle}>Pop Art</h4>
            <h4 className={styles.galeryTitle}>Deportes</h4>
            <h4 className={styles.galeryTitle}>Autos y Motos</h4>
        </main>
    </div>
)
export default galery;