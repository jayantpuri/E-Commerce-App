import React from "react";
import ProductCard from "../ProductCard/ProductCard.component";
import "./category-preview.styles.scss";
import { useNavigate } from "react-router";

const CategoryPreview = ({ products, title }) => {
  const naviagte  = useNavigate();
  const handleNavigate = () => {
    naviagte(`/shop/${title}`);
  }
  return (
    <div className="category-preview-container">
      <h2 className="title" onClick={handleNavigate}>{title.toUpperCase()}</h2>
      <div className="preview">
        {products
          .filter((__, idx) => idx < 4)
          .map((item) => (
            <ProductCard product={item} key={item.id} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
