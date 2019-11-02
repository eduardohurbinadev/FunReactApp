import React, { Fragment, Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
class App extends Component {

  //LifeCycle Method which is actually required
  render() {

    return (
      <div className="App">
        {/* //Props are properties that you can pass in to a component */}
        <Navbar/>
      </div>
    );
  }
}

export default App;
