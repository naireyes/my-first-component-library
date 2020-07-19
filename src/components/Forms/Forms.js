import React from "react";
import "./Forms.css";

const Forms = (props) => {
  return (
    <div>
      <p>Email</p>
      <input type="text" label="Email" placeholder="Email" />
    </div>
  );
  const Forms = (props) => {
    let classList = "";
    let types = ["small", "medium", "large"];
    if (types.includes(props.type)) {
      classList += ` button-${props.type}`;
    }
  };
};

export default Forms;
