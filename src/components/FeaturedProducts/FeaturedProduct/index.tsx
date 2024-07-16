import React from "react";

import { Link } from "react-router-dom";
import { Product } from "../../../mocks";

import "./FeaturedProduct.scss";

interface FeaturedProductProps {
  product: Product;
}

const FeaturedProduct = ({ product }: FeaturedProductProps) => {
  const { id, imageUrl, name, price } = product;
  return (
    <Link to={`/products/${id}`} className="featured__product__container">
      <div className="featured__product__img-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="featured__product-text-container">
        <p className="featured__product__title">{name}</p>
        <p className="featured__product__price">${price}</p>
      </div>
    </Link>
  );
};

export default FeaturedProduct;
