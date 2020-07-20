import React from "react";
import { storiesOf } from "@storybook/react";

import Thumbnails from "./Thumbnails";

function onClick() {
  alert("You have clicked a button");
}

storiesOf("Thumbnails", module).add("Apple Macbook Sale", () => (
  <img label="Macbook" type="default" />
));
