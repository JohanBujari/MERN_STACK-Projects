import React from "react";
import axios from 'axios';



const DeleteProduct = (props) => {

    const {productId, successCallback} = props;

    const deleteProduct = e => {
        axios.delete('http://localhost:8000/api/products/' + productId)
        .then(res=>{
            successCallback();
        })
    }
     return (
        <div>
            
                <button onClick={deleteProduct}>Delete</button>
           
            
        </div>
    );
};

export default DeleteProduct;