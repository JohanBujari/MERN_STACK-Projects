import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AuthorDelete from "./AuthorDelete";


const AuthorList = () => {
    const [author, setAuthor] = useState([]);

    useEffect(() => {
        axios
        .get('http://localhost:8000/api/authors')
        .then(res => setAuthor(res.data.authors))
    },[author])

    const removeAuthor = (authorId) => {
    setAuthor(author.filter((author) => author._id!== authorId));
    }
    return (
        <div>
            <h1>Authors</h1>
            {
                author.map((author, index) => {
                    return(
                        <p key={index}>
                            Name: {author.name}
                            <Link to={`/authors/edit/${author._id}`}>Edit</Link>
                             <AuthorDelete authorId = {author._id} successCallback={() => removeAuthor(author._id)}/>
                        </p>
                       
                    )
                })
            }
        </div>
    );
};

export default AuthorList;