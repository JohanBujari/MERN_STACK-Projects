import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = (props) => {
  const { search, setSearch } = props;
  const handleChange = (e) => {
    e.preventDefault();
    const lowercase = e.target.value.toLowerCase();
    setSearch(lowercase);
  };

  return (
    <div>
      <input
        type="search"
        placeholder="search product"
        onChange={handleChange}
        value={search}
      />
    </div>
  );
};

export default SearchInput;
