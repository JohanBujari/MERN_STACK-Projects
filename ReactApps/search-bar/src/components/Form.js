import React, { useState } from "react";
import List from "./List";

const Form = (props) => {
  const [query, setQuery] = useState("");
  return (
    <div>
      <label>Search names</label>
      <input
        type="text"
        placeholder="names"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
        <List query={query} />
      </div>
    </div>
  );
};

export default Form;
