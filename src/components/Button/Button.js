import React from "react";
import "./Button.css";


const Button = (props) => {


  let classList = '';
  let types = ['primary', 'danger', 'success', 'warning', 'default']
  if (types.includes(props.type)) {
    classList += ` button-${props.type}`
  }
  if (props.hover) {
    classList += ` button-${props.type}-hover`
  }
  if (props.large) {
    classList += ` button-large`
  }

  if (props.filled) {
    classList += ` button-${props.type}-filled`
  }
  if (props.outline) {
    classList += ` button-${props.type}-outline`
  }
  if (props.addToCart) {
    classList += ` button-addToCart`
  }

  if (props.addToFav) {
    classList += ` button-addToFav`
  }

  return <button className = {
    classList
  } > {
    props.label
  } < /button>
}

export default Button;
