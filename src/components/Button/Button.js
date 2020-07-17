import React from "react";
import "./Button.css";

// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
  //   let classList = [];
  //   classList.push("override");
  //   let types = ["primary", "danger", "success", "warning"];

  //   if (types.includes(props.type)) {
  //     classList.push(`button-$(props.type}${props.outline})`);
  //   }

  //   if (props.large) {
  //     classList.push("button-large");
  //   }

  //   if (props.small) {
  //     classList.push("button-small");
  //   }

  //   if (props.outline) {
  //     classList.push(`button-${props.type}-outline`);
  //   }

  //   return <button className={classList.join(" ")}> {props.label}</button>;

  let classList = "";
  // classList.push('override');
  let types = ["primary", "danger", "warning", "success", "default"];
  let large = ["primary", "danger", "warning", "success", "default"];

  // if(types.includes(props.type)){
  //     classList.push(`button-${props.type}`)
  // }
  // if(props.large){
  //     classList.push('button.large')
  // }
  // if([props])
  // }
  // return <button className={'button-${props.type}'}>{props.label}</button>

  if (types.includes(props.type)) {
    classList += ` button-${props.type}`;
  }

  //   if (types.includes(props.large)) {
  //     classList += ` button-large`;
  //   }

  return <button className={classList}>{props.label}</button>;
};
export default Button;
