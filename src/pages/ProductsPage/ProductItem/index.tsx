import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../../mocks";
import "./ProductItem.scss";

type Props = {
  product: Product;
};

const ProductItem = ({
  product: { id, imageUrl, name, variants, price },
}: Props) => {
  return (
    <div className="product__item__container">
      <Link to={`/products/${id}`} className="product__item">
        <div className="product__item__img-container">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="product__item__text-container">
          <p className="product__item__text-name">{name}</p>
          <p className="product__item__text-price">${price}</p>
        </div>
      </Link>
      <div className="product__item__variants">
        <ul className="product__item__variants-container">
          {variants?.map((variant, idx) => (
            <li
              className="product__item__list-item"
              key={(variant?.hexCode || "") + idx}
            >
              <Link
                to={`/products/${id}?img_index=${idx}`}
                title={variant.color}
                style={{
                  backgroundColor: variant?.hexCode || "",
                }}
              >
                {variant.color}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductItem;
