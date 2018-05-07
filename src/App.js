import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    link: "",
  }
  onLinkChange = (event) => {
    const value = event.target.value;
    this.setState({ link: value });
  }
  render() {
    const { link } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Type a link here and you'll get a link :) 
          <input value={link} onChange={this.onLinkChange}/>
        </p>
        {link && <a href={`${link}`} >{link}</a>}
      </div>
    );
  }
}

export default App;
