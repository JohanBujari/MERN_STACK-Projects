import React from "react";
import { useState, useEffect } from "react";

const List = (props) => {
  const { query } = props;
  const [names, setNames] = useState([]);
  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((response) => setNames(response.results));
    // console.log(names);
  }, []);

  const filteredData = names.filter((res) => {
    if (query === "") {
      return res;
    } else if (res.name.toLowerCase().includes(query.toLowerCase())) {
      return res;
    }
  });
  return (
    <div>
      {filteredData.map((name, index) => {
        return <li key={index}>{name.name}</li>;
      })}
    </div>
  );
};

export default List;
