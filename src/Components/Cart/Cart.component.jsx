import React from "react";
import { useNavigate } from "react-router";
import Button, { button_Type_Class } from "../Button/button.component";
import { useContext } from "react";
import { cartContext } from "../../Contexts/cartContext";
import "./cart.styles.scss";
import "./cart-item.styles.scss";

const Cart = () => {
  const { cartItems } = useContext(cartContext);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <span className="empty-cart">
            The items you will add to your cart will be displayed here.
          </span>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item-container" key={item.id}>
              <img src={item.imageUrl} alt={`${item.name}`} />
              <div className="item-details">
                <span>{item.name}</span>
                <span>
                  {item.qty} x {item.price}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
      <Button onClick={handleClick} buttonType={button_Type_Class.blackButton}>
        Go to checkout
      </Button>
    </div>
  );
};

export default Cart;
