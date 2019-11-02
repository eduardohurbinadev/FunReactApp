import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users'; 

class App extends Component {

  //LifeCycle Method which is actually required
  render() {

    return (
      <div className="App">
        {/* //Props are properties that you can pass in to a component */}
        <Navbar/>
        <div className="container">
        <Users/>
        </div>
      </div>
    );
  }
}

export default App;
