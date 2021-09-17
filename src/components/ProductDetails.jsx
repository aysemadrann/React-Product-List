import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'


function ProductDetails() {
    let { id } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${id}`)
        .then(res => {
            console.log(res)
            setProduct(res.data)
        })
    }, []);
    
    const { title, image, price, description } = product;
    return (
        <div>
            <div className='container'>
                <div className="row center">
                    <div className="col-12 col-xl-6 details__width">
                        <img src={image} alt="" />
                    </div>
                    <div className="col-xl-6 text-center">
                        <h4>{title}</h4>
                        <h5>{price}</h5>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;
