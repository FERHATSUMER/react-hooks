import React, { useState } from "react";
import './usestate.css';

function Usestate() {
  const [value, setValue] = useState(0);

  return (
    <div className="container">
      <h1 className="title">Simple React Counter </h1>
      <p className="parg">{value}</p>
      <div className="btn-container">
      <button className="btn" onClick={() => setValue(value + 1)}>
        Increase
      </button>
      <button className="btn"  onClick={() => setValue(0)}>
        Reset
      </button>
      <button className="btn" onClick={() => setValue(value - 1)}>
        Decrease
      </button>
      </div>
    </div>
  );
}
export default Usestate;
