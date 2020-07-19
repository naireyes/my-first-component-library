import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";

storiesOf("Button", module)
  .add("Primary", () => <Button label="Do Something" type="primary" />)
  .add("Hover Primary", () => (
    <Button label="Do Something" type="primary" hover />
  ))
  .add("Outline Primary", () => (
    <Button label="Do Something" type="primary" outline />
  ))
  .add("Filled Primary", () => (
    <Button label="Do Something" type="primary" filled />
  ))

  //Large Primary
  .add("Large Primary", () => (
    <Button label="Do Something" type="primary" large />
  ))
  .add("Large Filled Primary", () => (
    <Button label="Do Something" type="primary" large filled />
  ))
  .add("Large Outline Primary", () => (
    <Button label="Do Something" type="primary" large outline />
  ))

  //Regular Danger

  .add("Danger", () => <Button label="Do Something" type="danger" />)
  .add("Hover Danger", () => <Button label="Do Something" type="danger" />)
  .add("Outline Danger", () => (
    <Button label="Do Something" type="danger" outline />
  ))
  .add("Filled Danger", () => (
    <Button label="Do Something" type="danger" filled />
  ))

  //Large Danger
  .add("Large Danger", () => (
    <Button label="Do Something" type="danger" large />
  ))
  .add("Large Filled Danger", () => (
    <Button label="Do Something" type="danger" large filled />
  ))
  .add("Large Outline Danger", () => (
    <Button label="Do Something" type="danger" large outline />
  ))

  //Regular Success

  .add("Success", () => <Button label="Do Something" type="success" />)
  .add("Hover Success", () => <Button label="Do Something" type="success" />)
  .add("Outline Success", () => (
    <Button label="Do Something" type="success" outline />
  ))
  .add("Filled Success", () => (
    <Button label="Do Something" type="success" filled />
  ))

  //Large Success
  .add("Large Success", () => (
    <Button label="Do Something" type="success" large />
  ))
  .add("Large Filled Success", () => (
    <Button label="Do Something" type="success" large filled />
  ))
  .add("Large Outline Success", () => (
    <Button label="Do Something" type="success" large outline />
  ))
  //Regular Warning

  .add("Warning", () => <Button label="Do Something" type="warning" />)
  .add("Hover Warning", () => <Button label="Do Something" type="warning" />)
  .add("Outline Warning", () => (
    <Button label="Do Something" type="warning" outline />
  ))
  .add("Filled Warning", () => (
    <Button label="Do Something" type="warning" filled />
  ))

  //Large Warning
  .add("Large Warning", () => (
    <Button label="Do Something" type="warning" large />
  ))
  .add("Large Filled Warning", () => (
    <Button label="Do Something" type="warning" large filled />
  ))
  .add("Large Outline Warning", () => (
    <Button label="Do Something" type="warning" large outline />
  ))

  //Regular Default

  .add("Default", () => <Button label="Do Something" type="default" />)
  .add("Hover Default", () => <Button label="Do Something" type="default" />)
  .add("Outline Default", () => (
    <Button label="Do Something" type="default" outline />
  ))
  .add("Filled Default", () => (
    <Button label="Do Something" type="default" filled />
  ))

  //Large Default
  .add("Large Default", () => (
    <Button label="Do Something" type="default" large />
  ))
  .add("Large Filled Default", () => (
    <Button label="Do Something" type="default" large filled />
  ))
  .add("Large Outline Default", () => (
    <Button label="Do Something" type="default" large outline />
  ))

  .add("Add Cart", () => (
    <Button label="Add to Cart" type="default" addToCart />
  ))
  .add("Add to Favorites", () => (
    <Button label="Add to Favorites" type="default" addToFav />
  ))

  .add("Add Cart Small", () => <Button label="" type="default" addToCart />)
  .add("Add to Favorites Small", () => (
    <Button label="" type="default" addToFav />
  ));
