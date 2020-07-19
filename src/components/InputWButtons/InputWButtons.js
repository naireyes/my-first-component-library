import React from "react";
import "./InputWButtons.css";

const InputWButtons = (props) => {
  return (
    <div>
      <input type="text" label="Voucher Code" placeholder="Voucher Code" />
      <input type="submit" value="Redeem" />
    </div>
  );
};
export default InputWButtons;
