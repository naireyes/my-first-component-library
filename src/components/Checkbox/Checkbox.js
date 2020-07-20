import React from "react";
import "./Checkbox.css";

const Checkbox = (props) => {
  let classList = "";
  let types = ["blue", "black"];

  if (props.black) {
    classList += ` input-black`;
  }
  return (
    <div>
      <input type="checkbox" />
      <input className="black" type="checkbox" value="" checked />
    </div>
  );
};
export default Checkbox;
