import React from "react";
import { Route, Routes } from "react-router";
import CategoryPage from "../../Components/CategoryPage/CategoryPage.component";
import ShopPreview from "../../Components/ShopPreview/ShopPreview.component";
import "./shop.styles.scss";

function Shop() {
  return (
    <div>
      <Routes>
        <Route index element= {<ShopPreview />}/>
       <Route path="/:category" element={<CategoryPage/>}/>
      </Routes>

    </div>
  );
}

export default Shop;
