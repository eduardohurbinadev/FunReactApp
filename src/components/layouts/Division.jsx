import React, { useState } from "react";

function Division (props) {
  const [expand, setExpanded] = useState();

  function toggle() {
    expand ? setExpanded(false) : setExpanded(true);
  }

  return (
    <div className={expand ? props.inStyle : 'content-area-container-expanded'}>
      <h2 onClick={toggle}>
        <p>Do you feel good today?</p>
        {expand ? <span>Yes! 👍</span> : <span>No! 👎</span>}
      </h2>
    </div>
  );
}

export default Division;
