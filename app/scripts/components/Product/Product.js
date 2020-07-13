import React from "react";
import PropTypes from "prop-types";

const Product = ({ product }) => {
  const { picture, name, price, about, isActive } = product;

  return (
    <div className="product">
      <img src={picture} alt="product photo" />
      <div className="description-container">
        <p className="description">
          <strong>Product Name:</strong> {name}
        </p>
        <p className="description">
          <strong>Product Price:</strong> {price}
        </p>
        <p className="description">
          <strong>About Product:</strong> {about}
        </p>
        <p className="description">
          <strong>Available:</strong> {isActive ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
