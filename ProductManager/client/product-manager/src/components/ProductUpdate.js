import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import ProductForm from './ProductForm';
import DeleteProduct from './DeleteProduct';

const ProductUpdate = (props) => {

    const {id} =useParams();
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] =  useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                console.log(res)
                setProduct(res.data);
                setLoaded(true);
            })
    }, [])
    const updateProduct = product => {
        axios.put('http://localhost:8000/api/products/' + id, 
        product)
            .then(res => console.log(res));
            navigate('/home');
    }
    return (
        <div>
        <h1>Update the {product.tittle} Product</h1>
        {loaded && (
            <>
                <ProductForm
                    onSubmitProp={updateProduct}
                    intitialTittle={product.tittle}
                    intitialPrice={product.price}
                    initialDescription = {product.description}
                />
                <DeleteProduct productId={product._id} successCallback={() => navigate("/home")} />
            </>
        )}
    </div>
)
    
};

export default ProductUpdate;