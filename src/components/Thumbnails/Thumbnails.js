import React from "react";
import "./Thumbnails.css";
{
  /* <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
></link>; */
}

const Thumbnails = (props) => {
  return (
    <div className="container">
      <div className="macbook">
        <img src="./Macbook_pic.png" alt="Macbook Sale" />
        <p>Apple Macbook Pro</p>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
      </div>
      <div>
        <img src="./Outline_heart.png" alt="Outline Heart" />
        <img src="./Outline_cart.png" alt="Outline Heart" />
        <p>Apple Macbook Pro</p>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
      </div>
    </div>
  );
};
export default Thumbnails;
