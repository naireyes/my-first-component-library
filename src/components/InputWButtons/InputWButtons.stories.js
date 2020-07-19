import React from "react";
import { storiesOf } from "@storybook/react";

import InputWButtons from "./InputWButtons";

function onClick() {
  alert("You have clicked a button");
}

storiesOf("InputWButtons", module)
  .add("Input w Buttons Small", () => (
    <InputWButtons label="Redeem" type="small" />
  ))
  .add("Input w Buttons Large", () => (
    <InputWButtons label="Redeem" type="large" />
  ));
