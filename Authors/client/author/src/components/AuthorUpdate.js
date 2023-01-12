import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AuthorForm from "./AuthorForm";
import AuthorDelete from "./AuthorDelete";

const AuthorUpdate = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors/" + id)
      .then((res) => {setAuthor(res.data)
      console.log(res.data)}
      )
      .catch((err) => console.log(err));
  }, [id]);

  const updateAuthor = (author) => {
    axios
      .put("http://localhost:8000/api/authors/" + id, author)
      .then((res) => console.log(res.data));
    navigate("/authors");
  };
  return (
    <div>
      <h1>Update the {author.name} Product</h1>
      <AuthorForm
        initialName={author.name}
        onSubmit={updateAuthor}
       
      />
      <AuthorDelete
        authorId={author._id}
        successCallback={() => navigate("/")}
      />
    </div>
  );
};

export default AuthorUpdate;
