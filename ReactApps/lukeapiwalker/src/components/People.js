import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const People = (props) => {
  const { id } = props;
  const [apiData, setApiData] = useState([]);
  const [homeworldData, setHomeworldData] = useState([]);
  const [homeworldId, setHomeworldId] = useState();
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    axios
      .get(`https://swapi.py4e.com/api/people/${id}`)
      .then((response) => {
        console.log(response.data);
        setApiData(response.data);
        getHomeworldId(response.data.homeworld);
        axios
          .get(response.data.homeworld)
          .then((homeworldRes) => {
            console.log(homeworldRes.data.name);
            setHomeworldData(homeworldRes.data.name);
          })
          .catch((err) => console.log(err));
        setIsError(false);
        // console.log(apiData);
      })
      .catch((err) => console.log(err));
    setIsError(true);
  }, [id]);

  const getHomeworldId = (homeworldURL) => {
    if (homeworldURL.charAt(homeworldURL.length - 3) === "/") {
      const hwId = homeworldURL.charAt(homeworldURL.length - 2);
      setHomeworldId(hwId);
    } else {
      const firstCharId = homeworldURL.charAt(homeworldURL.length - 3);
      const secondCharId = homeworldURL.charAt(homeworldURL.length - 2);
      const idString = `${firstCharId}${secondCharId}`;
      setHomeworldId(idString);
    }
  };

  if (!isError) {
    return (
      <div>
        <h1>{apiData.name}</h1>
        <div>
          <li>Height: {apiData.height} cm</li>
          <li>Mass: {apiData.mass} kg</li>
          <li>Eye Color: {apiData.eye_color}</li>
          <li>Skin Color: {apiData.skin_color}</li>
          <li>homeworld: {homeworldData}</li>
          <Link to={`/planets/${homeworldId}`}>Go to homeworld</Link>
        </div>
      </div>
    );
  } else {
    return <div>jojoj</div>;
  }
};

export default People;
