import React, { Component } from 'react';
import Header from './components/Header/header';
// import Categories from './components/Categories/categories';
import AboutUs from './components/AboutUs/aboutUs';
import OptionsNav from './components/Nav/OptionsNav/optionsNav';
// import Galery from './components/Shared/Galery/galery';
import styles from './app.module.scss';

class App extends Component {
  state = {
    socialIconApp : 'socialIconApp',
    requestGaleryCities: 'requestGaleryCities',
    renderRequestGalery: false,
    expandImage: false,
    openOptionsNav: false,
    openGalery: false,
    selectedCategory: 0,
  }

  showRequestGalery = () => {
    this.setState({
      renderRequestGalery: true,
    })
  };

  handleCloseGaleryShowed = () => {
    this.setState({
      renderRequestGalery: false
    })
  }

  expandImageGalery = () => {
    this.setState({
      expandImage:  true,
    })
  }

  handleCloseImageShowed = () => {
    this.setState({
      expandImage:  false,
    })
  }

  handleOpenOptionsNav = () => {
    this.setState({
      openOptionsNav:  true,
    })
  }
  handleCloseOptionsNav = () => {
    this.setState({
      openOptionsNav: false,
    })
  }

  handleOpenGalery = (clickedCategory) => {
    this.setState({
      openGalery:  true,
      selectedCategory: clickedCategory,
    })
  }
  handleCloseGalery = () => {
    this.setState({
      openGalery: false,
    })
  }

  

  render() {
    const { socialIconApp, requestGaleryCities, renderRequestGalery, expandImage, openOptionsNav, openGalery, selectedCategory } = this.state;
    return (
      <div className={styles.app}>
        <section className={styles.background}>
          { openOptionsNav && <OptionsNav handleCloseOptionsNav={this.handleCloseOptionsNav} />}
          <Header handleOpenOptionsNav={this.handleOpenOptionsNav} />
          <AboutUs socialIconApp={socialIconApp}/>
        </section>
         {/* <Categories handleOpenGalery={this.handleOpenGalery}  />
        { openGalery && <Galery 
          handleCloseGalery={this.handleCloseGalery}
          showRequestGalery={this.showRequestGalery} 
          renderRequestGalery={renderRequestGalery} 
          requestGaleryCities={requestGaleryCities} 
          handleCloseGaleryShowed={this.handleCloseGaleryShowed}
          expandImageGalery={this.expandImageGalery}
          expandImage={expandImage}
          handleCloseImageShowed={this.handleCloseImageShowed}
          handleOpenOptionsNav={this.handleOpenOptionsNav}
          selectedCategory={selectedCategory}
        />} */}
      </div>
    );
  }
}

export default App;
