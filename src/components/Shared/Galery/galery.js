import React from 'react';
import close from '../../../assets/images/closegalery.png';
import GaleryRequest from './GaleryRequest/galeryRequest';
import { requestCategoriesGlassPicture } from '../../../Helpers/requestCategoriesGlassPicture';
import CategoriesGalery from './CategoriesGalery/categoriesGalery';
import Nav from '../../Nav/nav';
import Brand from '../../Brand/brand';
import styles from './galery.module.scss';

const galery = (
    { 
        showRequestGalery, 
        renderRequestGalery, 
        handleCloseGaleryShowed,
        expandImageGalery,
        expandImage, 
        handleCloseImageShowed, 
        handleCloseGalery,
        handleOpenOptionsNav
        
    }) => {
     const titlesCategories = requestCategoriesGlassPicture.map(category => {
       return <CategoriesGalery category={category.name} showRequestGalery={showRequestGalery} />
    })
    return (
    <div className={styles.background}>
        <div className={styles.navigation}>
            <img role="button" className={styles.headerClose} src={close} onClick={handleCloseGalery} alt='close'/>
            <Brand 
                brandNavigation='brandNavigation' 
                logoNavigation='logoNavigation' 
            />
            <Nav handleOpenOptionsNav={handleOpenOptionsNav} />
        </div>
        <div className={styles.header}>
            <h1 className={styles.headerTitle}>CIUDADES</h1>
        </div>
        <main className={styles.galery}>
            {titlesCategories}
            {renderRequestGalery && 
                <GaleryRequest handleCloseGaleryShowed={handleCloseGaleryShowed}
                    expandImageGalery={expandImageGalery} 
                    expandImage={expandImage}
                    handleCloseImageShowed={handleCloseImageShowed}
                /> 
            }
        </main>
    </div>
    )
}
export default galery;