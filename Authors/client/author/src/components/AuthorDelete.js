import React from "react";
import axios from 'axios';
const AuthorDelete = (props) => {
    const {authorId, successCallback} = props;

    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
        .then(res => {successCallback()})
    }
    return (
        <div>
            <button onClick={deleteAuthor}>Delete</button>
        </div>
    );
};

export default AuthorDelete;