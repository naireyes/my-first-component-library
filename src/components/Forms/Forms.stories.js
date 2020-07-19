import React from "react";
import { storiesOf } from "@storybook/react";

import Forms from "./Forms";

function onClick() {
  alert("You have clicked a button");
}

storiesOf("Forms", module)
  .add("Form Small", () => <Forms type="small" />)
  .add("Form Medium", () => <Forms type="medium" />)
  .add("Form Large", () => <Forms type="large" large />)
  .add("Form Large", () => <Forms type="dropDown" regular />);
