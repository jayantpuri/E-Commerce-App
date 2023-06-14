import React, { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments} from "../Utils/firebase.utils";
export const productsContext = createContext({
  products: [],
  setProducts: () => null,
});

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    const getProducts = async () => {
      const categories = await getCategoriesAndDocuments();
      setProducts(categories);
    };

    getProducts();
  }, []);

  const value = { products };
  return (
    <productsContext.Provider value={value}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsProvider;
