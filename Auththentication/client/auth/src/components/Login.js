import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = (props) => {
  const { logInPageIsActive, setLogInPageIsActive } = props;
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "", 
  });
  const [errors, setErrors] = useState(null);
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
      .post("http://localhost:8000/api/user-login", {
        email: inputs.email,
        password: inputs.password
      })
      .then((response) => {
        navigate('/user')
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data)
        setErrors(error.response.data);
      });
  };
  useEffect(() => {
    setLogInPageIsActive(true);
  });

  return (
    <div>
      <Header
        logInPageIsActive={logInPageIsActive}
        setLogInPageIsActive={setLogInPageIsActive}
      />
      <h1 style={{ textAlign: "center" }}>Log In</h1>
      <form
        onSubmit={handleSubmit}
        type="submit"
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          width: "350px",
          margin: "auto",
          gap: "15px",
        }}
      >
        <label>Email</label>
        <input name="email" type="email" placeholder="Email" value={inputs.email} onChange={handleInputChange} />
        <p style={{color:'red'}}>{errors ? errors.message : " "}</p>

        <label>Password</label>
        <input name="password" type="password" placeholder="Password" value={inputs.password} onChange={handleInputChange} />
        <p style={{color:'red'}}>{errors ? errors.message : " "}</p>

        <button style={{ color: "green" }}>Log In</button>
      </form>
    </div>
  );
};

export default Login;
