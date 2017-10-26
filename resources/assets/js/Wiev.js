import React, { Component } from 'react';

import Nav from './containers/Nav.js';
import SearchFlyDiv from './containers/SearchFlyDiv.js';
import Footer from './containers/Footer.js';
import fontello from './style/fontello-61e90d2c/css/fontello.css';

class App extends Component {

  render() {
    return (
        <div className="App conatiner">
            <Nav />
            <SearchFlyDiv />              
            <Footer />
        </div> 
    );
  }
}

export default App;
