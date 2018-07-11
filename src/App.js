import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }))
  }

  handleAuth = () => {
    const provider = new firebase.auth.GoogleAuthProvider()

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesion`))
      .catch(error => console.log(`Error ${error.code}: ${error.message} `))
  }

  renderLoginButton = () => {
    if (!this.state.user) {
      return (
        <button onClick={this.handleAuth} className="app-btn">
          Iniciar Sesión
        </button>
      )
    } else {
      return (
        <div>
          Hola {this.state.user.displayName}
        </div>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.renderLoginButton()}
      </div>
    );
  }
}

export default App;
