import React from "react";
import { storiesOf } from "@storybook/react";

import Checkbox from "./Checkbox";

function onClick() {
  alert("You have clicked a button");
}

storiesOf("Checkbox", module)
  .add("Checkbox Black", () => <Checkbox label="Redeem" type="small" />)
  .add("Checkbox Blue", () => <Checkbox label="Redeem" type="small" />);
