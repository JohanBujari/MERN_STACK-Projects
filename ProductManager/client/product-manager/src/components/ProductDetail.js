import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { json, useParams } from 'react-router-dom';

const ProductDetail = (props) => {

    const [product, setProduct] = useState([]);
    const {id} =useParams();
    console.log(id);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then( res => {
                // console.log("res"+ JSON.stringify(res) );
                setProduct(res.data);
            })
            .catch( err => console.log("error"+ err) );
    }, []);
    return (  
        <div>
            <p>Product Price: {product.price}</p>
            <p>Product Description: {product.description}</p>
            
        </div>
    );
};

export default ProductDetail;