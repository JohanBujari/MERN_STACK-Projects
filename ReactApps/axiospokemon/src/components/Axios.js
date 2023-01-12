import axios from "axios";
import React, {useState, useEffect} from "react";

const Axios = (props) => {
    const [names, setNames] = useState([]);
  
    useEffect(() => {
      axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(response => {
          // console.log(response.data.results)
          setNames(response.data.results)})
        .catch(err=>console.log(err))
    }, []);
  
    return (
      <div>
        {
          names.map((name, index)=>{
            return (
              <li key={index}>{name.name}</li>
            )
          })
        }
      </div>
    );
  };
  
  export default Axios;
  