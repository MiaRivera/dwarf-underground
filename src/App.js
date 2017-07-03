import React, { Component } from 'react';
import './App.css';
import Header from './header'
import Article from './article'
import SideAd from './side-ad'
import OtherArticles from './other-articles'
import Footer from './footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header /> 

        <main className="expanded row">
          <Article />
          <SideAd />
          <OtherArticles />
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
