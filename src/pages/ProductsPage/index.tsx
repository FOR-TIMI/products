import React from "react";
import { mockProducts } from "../../mocks";
import ProductItem from "./ProductItem";
import "./ProductsPage.scss";

const ProductsPage = () => {
  return (
    <div className="product__page__container">
      <div className="product__page__text-container">
        <h3 className="title">ALL PRODUCTS</h3>
        <div className="subtitle">
          Explore our diverse collection of high-quality items for every need
          and style. From fashion-forward apparel to practical home essentials,
          our curated selection offers something for everyone. Discover
          trendsetting pieces, timeless classics, and innovative designs that
          cater to your unique taste and lifestyle. Shop with confidence and
          elevate your everyday experiences with our comprehensive range of
          products.
        </div>
      </div>

      <div className="product__page__products__container">
        {mockProducts.map((product, id) => (
          <ProductItem key={product.id + id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
