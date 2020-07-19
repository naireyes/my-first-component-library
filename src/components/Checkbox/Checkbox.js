import React from "react";
import "./Checkbox.css";

const Checkbox = (props) => {
  return (
    <div>
      <input type="checkbox" />
      <input className="checked" type="checkbox" value="" checked />
    </div>
  );
};
export default Checkbox;
