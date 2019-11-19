import React, { Fragment, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Button from "./components/Button";
import car from "./images/Car.png";
import apps from "./images/AppsMenu.png";
import Date from './components/Date';
import push from './images/PushButton.png';
import Division from './components/layouts/Division'; 

function App() {

  const [expanded, setExpanded] = useState();  

  function toggle() {
    return expanded = !expanded; 
  }

  return (
    <Fragment>
      <div className="container">
        <div className="status-bar-container">
            <Button image={car} />
          <Date />
            <Button image={apps} />
          <div>

          </div>
        </div>
        <Division inStyle='content-area-container'/>
        {/* <div className="content-area-container" >
          <Button image={push} className="icon-size" />
          <Division />
        </div> */}
        <div className="cards-container">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="climate-controls-container"></div>
      </div>
    </Fragment>
  );
}

export default App;
