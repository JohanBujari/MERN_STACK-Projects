import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import { useNavigate } from "react-router-dom";


const AuthorForm = (props) => {
  const navigate = useNavigate();
    const {initialName, onSubmit, errors} = props;
    const [name, setName] = useState(initialName);

    const submitHandler = e => {
        e.preventDefault();
        onSubmit({name});
        setName("");
        navigate('/authors');
        console.log(errors);
    }
    return (
        <div>
         <form className="product-form" onSubmit={submitHandler}>
         {/* {errors.map((err, index) => <p key={index}>{err}</p>)} */}
        <h1>FavoriteAuthors</h1>
        <div className="input-fields">
          <label>Name</label>
          <input
            id="tittle"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
            { errors? 
                        <p>{errors}</p>
                        : null
                    }
          </div>
          <input type='submit' disabled={!name} />
          </form>
        </div>
        
    );
};

export default AuthorForm;