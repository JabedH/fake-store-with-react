import React from "react";
import "./Menubar.css";

const Menubar = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-2 p-2">logo</div>
          <div className="col-md-10 p-2 menu-container d-flex justify-content-end">
            <li className="items me-2 p-2">HOME</li>
            <li className="items me-2 p-2">CONTACT</li>
            <li className="items me-2 p-2">
              CART <sup>{props.count}</sup>{" "}
            </li>
            <li className="items me-2 p-2">LOGIN</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
