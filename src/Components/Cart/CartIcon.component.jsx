import React from "react";
import { ReactComponent as ShoppingBag } from "../../sBag.svg";
import { cartContext } from "../../Contexts/cartContext";
import { useContext } from "react";
import "./cart-icon.styles.scss";

const CartIcon = () => {
    const { isCartOpen, setIscartOpen , cartTotal}  = useContext(cartContext);
    const toggleCart = ()=> {
        setIscartOpen(!isCartOpen);
    }
  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <div className="shopping-icon">
        <ShoppingBag />
      </div>
      <div className="item-count">{cartTotal}</div>
    </div>
  );
};

export default CartIcon;
