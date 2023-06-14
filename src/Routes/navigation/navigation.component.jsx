import React, { Fragment, useContext } from "react";
import "./navigation.style.scss";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { ReactComponent as Crown } from "../../crown.svg";
import { userContext } from "../../Contexts/userContext";
import { signOutUser } from "../../Utils/firebase.utils";
import Cart from "../../Components/Cart/Cart.component";
import CartIcon from "../../Components/Cart/CartIcon.component";
import { cartContext } from "../../Contexts/cartContext";

const Navigation = () => {
  const { currentUser } = useContext(userContext);
  const {isCartOpen} = useContext(cartContext);
  const navigate = useNavigate();
  const signOut = () => {
    navigate("/checkout");
    signOutUser();
    alert("you have signed out");
  };
  return (
    <Fragment>
      <div className="navigation-container">
        <Link className="logo-container">
          <Crown />
        </Link>

        <div className="navItems-container">
          <Link to={"/"} className="navItems">
            Home
          </Link>
          <Link to={"/shop"} className="navItems">
            Shop
          </Link>

          {currentUser ? (
            <h4 className="navItems" onClick={signOut}>
              Sign-Out
            </h4>
          ) : (
            <Link to={"sign-in"} className="navItems">
              Sign-In
            </Link>
          )}
          <CartIcon/>
        </div>
         {isCartOpen && <Cart/>}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
