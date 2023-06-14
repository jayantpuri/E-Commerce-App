import React, { Fragment } from "react";
import { useContext } from "react";
import { productsContext } from "../../Contexts/productsContext";
import CategoryPreview from "../Category-preview/CategoryPreview.component";

const ShopPreview = () => {
  const { products } = useContext(productsContext);
  return (
    <div className="shop-conatiner">
      {Object.keys(products).map((title) => {
        return (
          <Fragment key={title}>
            <CategoryPreview products={products[title]} title={title} />
          </Fragment>
        );
      })}
    </div>
  );
};

export default ShopPreview;
