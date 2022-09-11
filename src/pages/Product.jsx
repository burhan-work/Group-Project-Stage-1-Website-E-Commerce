import React from "react";

const Product = () => {
  return (
    <div>
      <div className="navbar">
        {/* <a href="index.html"> */}
        <h2>
          <img src="asset/MLogo.png" alt="logo" />
        </h2>
        {/* </a> */}

        {/* <a href="cart.html"> */}
        <div className="cart">
          <i className="bi bi-basket"></i>
          <div id="cartAmount" className="cartAmount">
            0
          </div>
        </div>
        {/* </a> */}
      </div>
    </div>
  );
};

export default Product;
