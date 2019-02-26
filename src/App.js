import React, { Component } from 'react';
import Header from './components/Header/header';
import Categories from './components/Categories/categories';
import AboutUs from './components/AboutUs/aboutUs';
import Social from './components/Social/social';
import OptionsNav from './components/Nav/OptionsNav/optionsNav';
import styles from './app.module.scss';

class App extends Component {
  state = {
    socialIconApp : 'socialIconApp',
    view: 0,
  }
  render() {
    const { socialIconApp, view } = this.state;
    return (
      <div className={styles.app}>
      <OptionsNav view={view} />
        <Header />
        <Categories />
        <AboutUs />
        <Social socialIconApp={socialIconApp} />
        
      </div>
    );
  }
}

export default App;
