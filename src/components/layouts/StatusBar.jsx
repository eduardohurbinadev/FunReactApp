import React from "react";
import car from "../../images/Car.png";
import apps from "../../images/AppsMenu.png";

export default function StatusBar() {
  return (
    <div>
      <div>
        <img src={apps} styleClass="icon-size" />
      </div>
      <div>
        <img src={car} />
      </div>
    </div>
  );
}
