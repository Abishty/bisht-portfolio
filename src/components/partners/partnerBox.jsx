import React from "react";
// SCSS
import "./partnerBox.scss";

const partnerBox = (props) => (
  <div className="partner__box flex-center">
    <img src={props.partner} alt="partner" className="partner-img"/>
  </div>
);

export default partnerBox;
