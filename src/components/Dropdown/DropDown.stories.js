import React from "react";
import { storiesOf } from "@storybook/react";

import DropDown from "./DropDown";

function onClick() {
  alert("You have clicked a button");
}

storiesOf("Dropdown", module)
  .add("Dropdown Wide", () => (
    <DropDown label="Select" type="small" placeholder="Select" />
  ))
  .add("Dropdown Narrow", () => <DropDown label="Select" type="small" />)
  .add("Dropdown Short", () => <DropDown label="Select" type="small" />)
  .add("Dropdown Lt Gray Wide", () => (
    <DropDown Wide label="Select" type="small" />
  ))
  .add("Dropdown Lt Gray Narrow", () => (
    <DropDown label="Select" type="small" />
  ))
  .add("Dropdown Lt Gray Short", () => (
    <DropDown label="Select" type="small" />
  ));
