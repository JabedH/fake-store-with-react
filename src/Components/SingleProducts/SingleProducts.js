import React from "react";
import ReactsModals from "../ReactsModals/ReactsModals";
import "./SingleProducts.css";

const SingleProducts = (props) => {
  //   const {product} = {props.product}
  const { setCartCount } = props;
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="linear"
      data-aos-duration="500"
      className="col-md-4 mt-2 mb-2"
    >
      <div className="card p-3 border">
        <img className="w-50 m-auto" src={props.product.image} alt="" />
        <h1>{props.product.title.slice(0, 10)} </h1>
        <div className="d-flex justify-content-around">
          <button onClick={setCartCount} className="btn btn-success ">
            Add to Card
          </button>
          <button className="btn btn-danger ">Delete</button>
          {/* <button className="btn btn-info "></button> */}
          <ReactsModals product={props.product}> </ReactsModals>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
