import React, { useState } from "react";

const PersonCard = (props) => {
  const [age, setAge] = useState(props.age);
  return (
    <div>
      <h1>
        {props.firstName} {props.lastName}
      </h1>
      <p>Age: {age}</p>
      <button onClick={(event) => setAge(age + 1)}>
        Birthday button for {props.firstName} {props.lastName}
      </button>
      <p>Hair Color: {props.color}</p>
    </div>
  );
};

export default PersonCard;