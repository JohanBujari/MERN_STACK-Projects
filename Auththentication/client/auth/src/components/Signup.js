import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const navigate = useNavigate();
  const { logInPageIsActive, setLogInPageIsActive } = props;
  const [error, setError] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8000/api/user-signup", {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      })
      .then((response) => {
        navigate("/login");
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data);
        setError(error.response.data);
      });
  };

  useEffect(() => {
    setLogInPageIsActive(false);
  });

  return (
    <div>
      <Header
        logInPageIsActive={logInPageIsActive}
        setLogInPageIsActive={setLogInPageIsActive}
      />
      <h1 style={{ textAlign: "center" }}>Sign Up</h1>
      <form
        type="submit"
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          width: "350px",
          margin: "auto",
          gap: "15px",
        }}
      >
        <label>Name</label>
        <input
          name="name"
          type="name"
          placeholder="Name"
          value={inputs.name}
          onChange={handleInputChange}
        />
        {error ? error.message1 : " "}
        <label>Email</label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={inputs.email}
          onChange={handleInputChange}
        />
        {error ? error.message2 : " "}
        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={inputs.password}
          onChange={handleInputChange}
        />
        {error ? error.message3 : " "}
        <button style={{ color: "green" }}>Sign up</button>
      </form>   
    </div>
  );
};

export default Signup;
