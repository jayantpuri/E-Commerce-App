import React, { useEffect } from "react";
import { useState, createContext } from "react";

export const cartContext = createContext({
  isCartOpen: null,
  setIscartOpen: () => null,
  addProductToCart: () => null,
  cartItems: [],
  setCartItems: () => null,
  addItem: () => null,
  deleteItem: () => null,
  decerementQty: () => null,
  totalCartPrice: () => null,
  cartTotal: 0,
  cartPrice: 0,
});

const addProductToCart = (product, cartItems) => {
  const cartProduct = cartItems.find((item) => item.id === product.id);

  if (cartProduct) {
    return cartItems.map((item) =>
      item.id === cartProduct.id ? { ...item, qty: item.qty + 1 } : item
    );
  }
  return [...cartItems, { ...product, qty: 1 }];
};

const cartQuantity = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.qty, 0);
};

const removeProductFromCart = (cartItems, product) => {
  return cartItems.filter((item) => item.id !== product.id);
};

const decreaseQuantity = (cartItems, product) => {
  console.log(product);
  if (product.qty === 1) {
    return removeProductFromCart(cartItems, product);
  }
  return cartItems.map((item) =>
    item.id === product.id ? { ...item, qty: item.qty - 1 } : item
  );
};

const totalCost = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.qty * item.price, 0);
};

const CartProvider = ({ children }) => {
  const [isCartOpen, setIscartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);

  const addItem = (product) => {
    setCartItems(addProductToCart(product, cartItems));
  };

  const deleteItem = (product) => {
    setCartItems(removeProductFromCart(cartItems, product));
  };

  const decerementQty = (product) => {
    setCartItems(decreaseQuantity(cartItems, product));
  };

  useEffect(() => {
    setCartPrice(totalCost(cartItems));
  }, [cartItems]);

  useEffect(() => {
    setCartTotal(cartQuantity(cartItems));
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIscartOpen,
    cartItems,
    setCartItems,
    addItem,
    cartTotal,
    deleteItem,
    decerementQty,
    cartPrice,
  };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export default CartProvider;
