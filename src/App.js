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
    view: 0,
    requestGaleryCities: 'requestGaleryCities',
    renderRequestGalery: false,
    expandImage: false,
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

  handleCloseImageShowed = () =>{
    this.setState({
      expandImage:  false,
    })
  }

  render() {
    const { socialIconApp, view, requestGaleryCities, renderRequestGalery, expandImage } = this.state;
    return (
      <div className={styles.app}>
        {/* <OptionsNav view={view} /> */}
        <Header />
        <Categories />
        <AboutUs />
        <Social socialIconApp={socialIconApp} />
        {/* <Galery 
          showRequestGalery={this.showRequestGalery} 
          renderRequestGalery={renderRequestGalery} 
          requestGaleryCities={requestGaleryCities} 
          handleCloseGaleryShowed={this.handleCloseGaleryShowed}
          expandImageGalery={this.expandImageGalery}
          expandImage={expandImage}
          handleCloseImageShowed={this.handleCloseImageShowed}
        /> */}
      </div>
    );
  }
}

export default App;
