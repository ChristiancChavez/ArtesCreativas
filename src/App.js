import React, { Component } from 'react';
import Header from './components/Header/header';
import Categories from './components/Categories/categories';
import AboutUs from './components/AboutUs/aboutUs';
import Social from './components/Social/social';
import OptionsNav from './components/Nav/OptionsNav/optionsNav';
import Galery from './components/Shared/Galery/galery';
import styles from './app.module.scss';

class App extends Component {
  state = {
    socialIconApp : 'socialIconApp',
    requestGaleryCities: 'requestGaleryCities',
    renderRequestGalery: false,
    expandImage: false,
    openOptionsNav: false,
    openGalery: false,
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

  handleOpenGalery = () => {
    this.setState({
      openGalery:  true,
    })
  }
  handleCloseGalery = () => {
    this.setState({
      openGalery: false,
    })
  }

  

  render() {
    const { socialIconApp, requestGaleryCities, renderRequestGalery, expandImage, openOptionsNav, openGalery } = this.state;
    return (
      <div className={styles.app}>
        { openOptionsNav && <OptionsNav handleCloseOptionsNav={this.handleCloseOptionsNav} />}
        <Header handleOpenOptionsNav={this.handleOpenOptionsNav} />
        <Categories handleOpenGalery={this.handleOpenGalery} />
        <AboutUs />
        <Social socialIconApp={socialIconApp} />
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
        />}
      </div>
    );
  }
}

export default App;
