import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/home/home.component";
import Navigation from "./Routes/navigation/navigation.component";
import SignIn from "./Routes/Authentication/sign-in.component";
import SignUp from "./Routes/Authentication/sign-up.component";
import Shop from "./Routes/shop/shop.component";
import Checkout from "./Routes/checkout/Checkout.component";
import AdressForm from "./Routes/Address/AdressForm.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop/>} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/checkout" element = {<Checkout/>} />
        <Route path="/address" element = {<AdressForm/>}/>
      </Route>
    </Routes>
  );
};

export default App;
