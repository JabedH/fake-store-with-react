import React, { useEffect, useState } from "react";
import SingleProducts from "../SingleProducts/SingleProducts";
import "./AllProducts.css";

const AllProducts = (props) => {
  const { setCartCount } = props;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  return (
    <div>
      <h1>All Products</h1>
      <div className="row container">
        {products.map((pd) => (
          <SingleProducts setCartCount={setCartCount} key={pd.id} product={pd}>
            {" "}
          </SingleProducts>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
