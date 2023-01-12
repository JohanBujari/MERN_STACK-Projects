import React, { useState } from "react";
import "../App.css";
import axios from "axios";

const ProductForm = (props) => {
  const { intitialTittle, intitialPrice, initialDescription, onSubmitProp } = props;
  const [tittle, setTittle] = useState(intitialTittle);
  const [price, setPrice] = useState(intitialPrice);
  const [description, setDescription] = useState(initialDescription);

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({ tittle, price, description });
    setTittle("");
    setPrice("");
    setDescription("");
  };
  return (
    <div>
      <form className="product-form" onSubmit={submitHandler}>
        <h1>Product Manager</h1>
        <div className="input-fields">
          <label>Title</label>
          <input
            id="tittle"
            type="text"
            value={tittle}
            onChange={(e) => setTittle(e.target.value)}
          />
        </div>
        <div className="input-fields">
          <label>Price</label>
          <input
            id="tittle"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="input-fields">
          <label>Description</label>
          <input
            id="tittle"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default ProductForm;
