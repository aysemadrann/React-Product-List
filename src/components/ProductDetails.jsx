import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';



function ProductDetails(props) {
    let { id } = useParams();
    const [product, setProduct] = useState([]);
    const apiURL = 'https://fakestoreapi.com/products';
    useEffect(() => {
        axios(`${apiURL}/${id}`)
        .then(res => {
            console.log(res)
            setProduct(res.data)
        })
    }, [id]);

    const [value, setValue] = useState(0);

    const increment = () => {
        setValue(value + 1);
    };
    const decrement = () => {
        if(value > 0) {
            setValue(value - 1);
        }
    };
    const addBasket = () => {
        props.numberEdit(value);
        if(value > 0) {
            props.priceEdit(value * price)
        }

    };
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
                        <div className='d-flex justify-content-center'>
                            <button className='me-3' onClick={decrement}>-</button>
                            <p className='me-3'>{value}</p>
                            <button onClick={increment} >+</button>
                        </div>
                        <button onClick={addBasket} className='mt-4 btn btn-success'>Sepete ekle</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;
