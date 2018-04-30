import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Office from './Office';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">审计师桌面系统</h1>
                </header>
                <div className="App-intro">
                    <Office></Office>
                </div>
            </div>
        );
    }
}

export default App;
