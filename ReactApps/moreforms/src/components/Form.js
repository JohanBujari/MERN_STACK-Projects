import React, { useState } from "react";

const Form = (props) => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passowrd, setPassword] = useState("");
  const [passowrdError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 2) {
      setFirstNameError("The field must be at least with 2 chars");
    } else {
      setFirstNameError("");
    }
  };
  const handleLasttName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 2) {
      setLastNameError("The field must be at least with 2 chars");
    } else {
      setLastNameError("");
    }
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 5) {
      setLastNameError("The field must be at least with 5 chars");
    } else {
      setEmailError("");
    }
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordError("The field must be at least with 8 chars");
    } else {
      setPasswordError("");
    }
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value.length < 8 ) {
      setConfirmPasswordError(
        "The field must be at least with 8 chars and should match"
      );
    } else if(e.target.value !== passowrd){
      setConfirmPasswordError("should match");
    }
    else{
      setConfirmPasswordError("");
    }
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="name">
        <label>FirstName</label>
        <input type="text" value={firstName} onChange={handleFirstName} />
        {firstNameError ? <p>{firstNameError}</p> : ""}
      </div>
      <div className="lastname">
        <label>LastName</label>
        <input type="text" value={lastName} onChange={handleLasttName} />
        {lastNameError ? <p>{lastNameError}</p> : ""}
      </div>
      <div className="email">
        <label>Email</label>
        <input type="text" value={email} onChange={handleEmail} />
        {emailError ? <p>{emailError}</p> : ""}
      </div>
      <div className="passowrd">
        <label>Passowrd</label>
        <input type="text" value={passowrd} onChange={handlePassword} />
        {passowrdError ? <p>{passowrdError}</p> : ""}
      </div>
      <div className="confirm">
        <label>Confirm Password</label>
        <input
          type="text"
          value={confirmPassword}
          onChange={handleConfirmPassword}
        />
        {confirmPasswordError ? <p>{confirmPasswordError}</p> : ""}
      </div>
      <input type="submit" value="Create User" />
    </form>
  );
};

export default Form;