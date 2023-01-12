import React from "react";
import { useReducer } from "react";


const initialState = {
  firstName: {
    value: "",
    error: null,
  },
  lastName: {
    value: "",
    error: null,
  },
  email: {
    value: "",
    error: null,
  },
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_FIRSTNAME":
            return {
                ...state,
                firstName:{
                    ...state.firstName,
                    value: action.payload
                }
            }
            case "SET_FIRSTNAME_ERROR":
            return {
                ...state,
                firstName:{
                    ...state.firstName.value,
                    error: action.payload
                }
            }
        case "SET_LASTNAME":
            return {
                ...state,
                lastName:{
                    ...state.lastName,
                    value: action.payload
                }
            }
            case "SET_LASTNAME_ERROR":
            return {
                ...state,
                lastName:{
                    ...state.lastName.value,
                    error: action.payload
                }
            }
        case "SET_EMAIL":
             return {
                ...state,
                email:{
                    ...state.email,
                    value: action.payload
                }
            }
            case "SET_EMAIL_ERROR":
            return {
                ...state,
                email:{
                    ...state.email.value,
                    error: action.payload
                }
            }
        default:
            return state;
    }
}
 
const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleFirstName = (e) => {
    dispatch({
        type: "SET-FIRSTNAME",
        payload: e.target.value
  });
    
  }


  const handleLastName = (e) => {
    dispatch({
        type: "SET-LASTNAME",
        payload: e.target.value
  });
    
  };

  const handleEmail = (e) => {
    dispatch({
        type: "SET-EMAIL",
        payload: e.target.value
  });
    
  };



  const handleSubmit = (e) =>{
    e.preventDefault();
    
  }


  return (
    <form onSubmit={handleSubmit}>
        <div className="formvalidation">
        <div>
        <label>
          FirstName
          <input
            type="text"
            name="firstname"
            value={state.firstName.value}
            onChange={(e) => handleFirstName(e)}
            {...{handleFirstName} ? "" : ""}
          />
        </label>
        </div>
        <div>
        <label>
          LastName
          <input
            type="text"
            name="lastname"
            onChange={handleLastName}
          />
        </label>
        </div>
        <div>
        <label>
          Email
          <input
            type="text"
            name="email"
            onChange={handleEmail}
          />
        </label>
      </div>
      <input type="submit" value="submit" />
        </div>
      
    </form>
  );
};

export default Form;