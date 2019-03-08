import React from 'react';
import close from '../../../assets/images/closegalery.png';
import GaleryRequest from './GaleryRequest/galeryRequest';
import { requestCategoriesGlassPicture } from '../../../Helpers/requestCategoriesGlassPicture';
import CategoriesGalery from './CategoriesGalery/categoriesGalery';
import styles from './galery.module.scss';

const galery = ({ showRequestGalery, renderRequestGalery, handleCloseGaleryShowed, expandImageGalery,expandImage, handleCloseImageShowed }) => {
     const titlesCategories = requestCategoriesGlassPicture.map(category => {
       return <CategoriesGalery category={category.name} showRequestGalery={showRequestGalery} />
    })
    return (<div className={styles.background}>
        <div className={styles.header}>
            <h1 className={styles.headerTitle}>Cuadros en Vidrio</h1>
            <img className={styles.headerClose} src={close} alt='close'/>
        </div>
        <main className={styles.galery}>
            {titlesCategories}
            {renderRequestGalery && 
                <GaleryRequest handleCloseGaleryShowed={handleCloseGaleryShowed}
                    expandImageGalery={expandImageGalery} 
                    expandImage={expandImage}
                    handleCloseImageShowed={handleCloseImageShowed}
            /> }
        </main>
    </div>
    )
}
export default galery;