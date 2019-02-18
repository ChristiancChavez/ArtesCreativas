import React, { Component } from 'react';
import Header from './components/Header/header';
import Categories from './components/Categories/categories';
import AboutUs from './components/AboutUs/aboutUs';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Categories />
        <AboutUs />
      </div>
    );
  }
}

export default App;
