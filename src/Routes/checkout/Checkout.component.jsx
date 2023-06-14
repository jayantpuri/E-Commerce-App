import React from "react";
import { useContext } from "react";
import { cartContext } from "../../Contexts/cartContext";
import "./Checkout.style.scss";
import "./checkout-item.styles.scss";
import Button from "../../Components/Button/button.component";
import { useNavigate } from "react-router";

const Checkout = () => {
  const { cartItems, decerementQty, deleteItem, addItem, cartPrice } = useContext(cartContext);
  const naviagte = useNavigate();
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => {
        return (
          <div key={item.id} className="checkout-item-container">
            <div className="image-container">
              <img src={item.imageUrl} alt={`${item.name}`} />
            </div>
            <span className="name">{item.name}</span>
            <span className="quantity">
              <div className="arrow" onClick={() => decerementQty(item)}>
                &#10094;
              </div>
              <span> {item.qty}</span>
              <div className="arrow" onClick={() => addItem(item)}>
                &#10095;
              </div>
            </span>
            <span className="price">
              <span>{item.price * item.qty}</span>
            </span>
            <div onClick={() => deleteItem(item)} className="remove-button">
              &#10005;
            </div>
          </div>
        );
      })}
      <div className="total">Total: {cartPrice}</div>
      <div><Button onClick={() => naviagte("/address")}> Address & contact info</Button></div>
    </div>
  );
};

export default Checkout;
