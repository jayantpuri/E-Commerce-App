import React from "react";
import { cartContext } from "../../Contexts/cartContext";
import Button from "../Button/button.component";
import button_Type_Class from "../Button/button.component";
import "./product-card.styles.scss";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { price, name, imageUrl } = product;
  const {addItem} = useContext(cartContext);

  const addToCart = ()=> {
    addItem(product);
  }
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="product" />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={button_Type_Class.blackButton} type="button" onClick= {addToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
