import React, { useState } from "react";

const Form = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [passowrd, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const createUser = (e) => {
    e.preventDefault();

    const newUser = [firstName, lastName, email, passowrd, confirmPassword];
    console.log("Welcome", newUser);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <form onSubmit={createUser}>
      <div className="name">
        <label>FirstName</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="lastname">
        <label>LastName</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="email">
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="passowrd">
        <label>Passowrd</label>
        <input
          type="text"
          value={passowrd}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="confirm">
        <label>Confirm Password</label>
        <input
          type="text"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <input type="submit" value="Create User" />
      <div>
        <label>Your form Data</label>
        <ul>
          <li>FirstName: {firstName}</li>
          <li>LastName: {lastName}</li>
          <li>Email: {email}</li>
          <li>Passowrd: {passowrd}</li>
          <li>ConfirmPassword: {confirmPassword}</li>
        </ul>
      </div>
    </form>
  );
};

export default Form;