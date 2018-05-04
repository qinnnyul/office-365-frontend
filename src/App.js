import React, { Component } from 'react';
import 'antd/dist/antd.css';

import logo from './logo.svg';
import './App.css';
import Routers from './Routers';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Routers />
      </div>
    );
  }
}

export default App;
