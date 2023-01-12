import React, { useState, useEffect } from "react";
import axios from "axios";
const Planets = (props) => {
  const { id } = props;
  const [apiData, setApiData] = useState([]);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    axios
      .get(`https://swapi.py4e.com/api/planets/${id}`)
      .then((response) => {
        console.log(response.data);
        setApiData(response.data);
        setIsError(false);
        // console.log(apiData);
      })
      .catch((err) => console.log(err));
      setIsError(true);
  }, [id]);

  if(!isError){
  return (
    <div>
      <h1>{apiData.name}</h1>
      <div>
        <li>Height: {apiData.height} cm</li>
        <li>Mass: {apiData.mass} kg</li>
        <li>Eye Color: {apiData.eye_color}</li>
        <li>Skin Color: {apiData.skin_color}</li>
      </div>
    </div>
  )
  }
  else{
    return (
        <div>
            jojoj
        </div>
    )
  }
};

export default Planets;
