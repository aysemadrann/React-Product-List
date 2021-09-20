import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';




function Product() {

const [product, setProduct] = useState([]);
const apiURL = 'https://fakestoreapi.com/products';
useEffect(() => {
    axios(apiURL)
    .then(res => {
        setProduct(res.data)
    })
}, []);
const list = product.map((post) => {
    const {id, title, image, price } = post;
    return (
        <div key={id} className='col-12 col-sm-6 col-md-4 col-xl-3 d-flex'>
            <div >
            <Link to={`/list/${id}`}>
              <Card  className='card__hover'  >
                <div className='image'>
                <Card.Img className='p-3 mx-auto' variant="top" src={image} />
                </div>
                <Card.Body className='' >
                    <Card.Title className='card__title'>{title}</Card.Title>
                    <Card.Text>
                    {price}
                    </Card.Text>
                </Card.Body>
              </Card>
            </Link>
            </div>
        </div>
    )
});

return <div className='container'>
    <div className='row d-flex justify-content-center'>
{list}</div></div>
}

export default Product;
