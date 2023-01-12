import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';
import { useNavigate } from "react-router-dom";


const Main = () => {

    const navigate = useNavigate();
    const [authors, setAuthors] = useState([]);
    const [errors, setErrors] = useState([]);


   const createAuthor = (authorParam) => {
        axios.post('http://localhost:8000/api/authors', authorParam)
        .then((res) => {
            console.log(res)
            console.log(res.data.errors.name.message);
            setAuthors([...authors, res.data]);
            setErrors(res.data.errors.name.message)
            
            
        })
        .catch(err=>{
            
            console.log(err) // Get the errors from err.response.data
            // Set Errors
        })    
    }   

    return (
        <div>
            <AuthorForm initialName={authors.name} onSubmit={createAuthor} errors={errors}/>
            {/* <AuthorList /> */}
        </div>
    );
};

export default Main;