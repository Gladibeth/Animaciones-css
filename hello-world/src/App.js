import React, { Component } from 'react';
import logo from './logo.svg';
import logoPlatzi from './platzi.png';
import './App.css';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {
  state = {
    logo: logo,
    nombre: 'Reactjs',
  }
  onClick() {
    this.setState({
      logo: logoPlatzi,
      nombre: 'Platzi',
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CSSTransitionGroup
            transitionName="fade"
            transtionEnterTimeout={1000}
            transtionLeaveTimeout={1000}
          >
            <img
              key={this.state.logo}
              src={this.state.logo}
              className="App-logo"
              alt={this.state.nombre} />
          </CSSTransitionGroup>
          <p>
            Hello world
          </p>
          <button className="btn" onClick={this.onClick.bind(this)}>click me!</button>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
      </div>
    );
  }
}

export default App;
