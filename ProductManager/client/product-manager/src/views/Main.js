import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        console.log("test")
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const removeFromDom = (productId) => {
    axios
      .delete("http://localhost:8000/api/products/" + productId)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setProducts(products.filter((product) => product._id !== productId));
      })
      .catch((err) => console.log(err));
  };
  const createProduct = (productParam) => {
    axios
      .post("http://localhost:8000/api/products" , productParam)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setProducts([...products, res.data]);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <ProductForm
        onSubmitProp={createProduct}
        initialTittle=""
        initialPrice=""
        initialDescription=""
      />

      <ProductList products={products} removeFromDom={removeFromDom} />
    </div>
  );
};

export default Main;
