import React from 'react';
import styles from './aboutUs.module.scss';
const aboutUs = () => (
    <div className={styles.about}>
        <h1 className={styles.aboutTitle}>¿Como hacemos de tu espacio un Arte creativa?</h1>
        <p className={styles.aboutText}>¡Te brindamos productos que le agregan vida, aire fresco y ese estilo único que deseas a tus espacios 
            con excelentes precios; además te brindamos un excelente servicio de asesoria e instalación con 
            seguimiento continuo de tu satisfacción!
        </p>
        <span className={styles.aboutTitle}>Contáctanos y recibe la mejor Asesoría</span>
    </div>
)
export default aboutUs;