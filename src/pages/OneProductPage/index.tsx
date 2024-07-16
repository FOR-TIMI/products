import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { mockProducts, Product, ProductVariants, Sizes } from "../../mocks";
import "./OneProductPage.scss";

const OneProductPage = () => {
  const { productId } = useParams();
  const [searchParams] = useSearchParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<Sizes | null>(null);
  const [selectedVariant, setSelectedVariant] =
    useState<ProductVariants | null>(null);

  const getProduct = useCallback(() => {
    const foundProduct =
      mockProducts.find((product) => product.id === productId) || null;
    setProduct(foundProduct);
    if (foundProduct?.variants && foundProduct?.variants?.length > 0) {
      const imgIndex = parseInt(searchParams.get("img_index") || "0");
      setSelectedVariant(foundProduct.variants[imgIndex]);
    }
  }, [productId, searchParams]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  const handleClick = useCallback(async () => {
    if (!product || !selectedVariant || !selectedSize) return;

    const bagUtil = await import("bag/util");
    bagUtil.addToBag({
      color: selectedVariant.color,
      price: product.price,
      id: product.id,
      imageUrl: selectedVariant.imageUrl,
      name: product.name,
      quantity: 1,
      size: selectedSize,
    });

    scrollTo({ top: 0, behavior: "smooth" });
  }, [product, selectedVariant, selectedSize]);

  const variantsRender = useMemo(() => {
    if (!product?.variants?.length) return null;

    return (
      <div className="variants-container">
        {product.variants.map((variant, idx) => (
          <Link
            key={variant.color}
            className={`variant ${
              selectedVariant?.color === variant.color ? "selected" : ""
            }`}
            to={`/products/${product.id || productId}?img_index=${idx}`}
          >
            <p className="color">{variant.color}</p>
            <div className="img-container">
              <img loading="lazy" src={variant.imageUrl} alt={product.name} />
            </div>
          </Link>
        ))}
      </div>
    );
  }, [product, selectedVariant, productId]);

  const sizesRender = useMemo(() => {
    if (!product?.sizes?.length) return null;

    return (
      <div className="sizes">
        <p className="title">Sizes</p>
        <div className="size-grid">
          {product.sizes.map((size) => (
            <span
              key={size}
              className={`size ${selectedSize === size ? "selected" : ""}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </span>
          ))}
        </div>
      </div>
    );
  }, [product, productId, selectedSize]);

  if (!product) {
    return (
      <div className="one__product__page__container">
        <p>Ooops, That Product does not Exist</p>
      </div>
    );
  }

  return (
    <div className="one__product__page__container">
      <div className="main-img-container">
        <img
          loading="lazy"
          src={selectedVariant ? selectedVariant.imageUrl : product.imageUrl}
          alt={product.name}
        />
      </div>

      <div className="details-container">
        <div className="title-container">
          <p className="title">{product.name}</p>
          <p className="price">$ {product.price}</p>
        </div>

        {variantsRender}
        {sizesRender}

        <div className="cta-btn">
          <button
            onClick={handleClick}
            disabled={!selectedSize || !selectedVariant}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0.0996094C14.9 0.0996094 16.9 1.49961 16.9 3.89961V4.49961H20.7V9.59961C20.7 14.2996 22.8 22.8996 21.2 22.8996C20.5 22.8996 16.2 23.9996 12 23.9996C7.40004 23.9996 2.80004 22.8996 2.80004 22.8996C1.30004 22.8996 3.30004 14.1996 3.30004 9.59961V4.39961H7.10004V3.79961C7.10004 1.39961 9.10004 0.0996094 12 0.0996094ZM19.6 5.49961H16.9V7.69961H15.8V5.49961H8.20004V7.69961H7.10004V5.49961H4.40004V9.49961C4.40004 10.7996 4.30004 12.3996 4.00004 14.7996L3.90004 15.6996C3.50004 18.6996 3.40004 19.5996 3.40004 20.6996V21.8996C4.20004 21.9996 5.00004 22.1996 5.80004 22.2996C7.90004 22.5996 10 22.7996 11.9 22.7996H12.4C14 22.7996 15.7 22.5996 17.6 22.2996C17.8 22.2996 19.6 21.8996 20.5 21.7996V20.3996C20.5 19.3996 20.3 18.4996 20 15.6996C20 15.3996 19.9 15.0996 19.9 14.7996C19.6 12.3996 19.5 10.7996 19.5 9.49961V5.49961H19.6ZM12 1.19961C9.70004 1.19961 8.20004 2.19961 8.20004 3.79961V4.39961H15.8V3.79961C15.8 2.09961 14.3 1.19961 12 1.19961Z"
                  fill="white"
                />
              </svg>
            </svg>
            <span className="cta-btn-text">Add to Bag</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(OneProductPage);
