import React, { useState } from "react";

const BoxForm = (props) => {
  // const [color, setColor] = useState("");
  const { boxColor, setBoxColor, color, setColor, onChangeColor } = props;

  function submitHandler(e) {
    e.preventDefault();
    setBoxColor([...boxColor, color]);
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Color</h1>
        <input type="text" value={color} onChange={onChangeColor} />
        <button>Add</button>
      </form>
    </div>
  );
};

export default BoxForm;
