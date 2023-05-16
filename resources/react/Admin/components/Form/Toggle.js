import React, { useState } from "react";

const Toggle =(props)=>{
  const [toggleState, setToggleState] = useState("off");

  function toggle() {
    setToggleState(toggleState === "off" ? "on" : "off");
  }

  return <div className={`switch ${toggleState}`} onClick={toggle} />;
}

export default Toggle;