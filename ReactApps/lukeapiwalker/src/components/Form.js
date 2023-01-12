import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  const {id, onChangeId} =props;
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${category}/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      Search for:{""}
      <select onChange={(e) => setCategory(e.target.value)}>
        <option>------</option>
        <option>People</option>
        <option>Planets</option>
      </select>
      ID: <input type="text" onChange={onChangeId}></input>
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
