import React, { useState, useEffect } from "react";

const PokemonNames = (props) => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((response) => setNames(response.results));
    // console.log(names);
  }, []);

  return (
    <div>
      {names.length > 0 &&
        names.map((name, index) => {
          return <li key={index}>{name.name}</li>;
        })}
    </div>
  );
};

export default PokemonNames;