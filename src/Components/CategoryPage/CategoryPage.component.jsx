import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { productsContext } from "../../Contexts/productsContext";
import ProductCard from "../ProductCard/ProductCard.component";
import "./categoryPage.styles.scss";

const CategoryPage = () => {
  const {products}  = useContext(productsContext);
  const { category } = useParams();
  const [prod, setProd] = useState(products[category]);

  useEffect( () => {
    setProd(products[category]);
  }, [products , category])
  
  return (
    <div className="category-page-container">
      {prod && 
      prod.map((item) => (
        <ProductCard product={item} key={item.id}/>
      ))}
      </div>
  )
};

export default CategoryPage;
