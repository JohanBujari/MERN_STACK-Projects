import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteProduct from "./DeleteProduct";
import SearchInput from "./SearchInput";

const ProductList = (props) => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => setProduct(res.data.products));
  }, [product]);
  const removeFromDom = (productId) => {
    setProduct(product.filter((product) => product._id !== productId));
  };

  const handleFilteredData = product.filter((p) => {
    if(search ===''){
      return p;
    }
    else{
      return p.tittle.toLowerCase().includes(search);
    }
    
  })

  return (
    <>
      <h1>All products</h1>
      <SearchInput search={search} setSearch={setSearch}/>
      {handleFilteredData.map((product, index) => {
        return (
          // <div key={index}>
          <p key={index}>
            Tittle:
            <Link to={`/products/${product._id}`}>{product.tittle}</Link>
            <br></br>
            <Link to={`/products/edit/${product._id}`}>Edit</Link>
            <DeleteProduct
              productId={product._id}
              successCallback={() => removeFromDom(product._id)}
            />
          </p>
          // </div>
        );
      })}
    </>
  );
};

export default ProductList;
