import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';




function Product() {

const [product, setProduct] = useState([]);

useEffect(() => {
    axios('https://fakestoreapi.com/products')
    .then(res => {
        console.log(res)
        setProduct(res.data)
    })
}, []);
const list = product.map((post) => {
    const {id, title, image, price } = post;
    return (
        <div className='col-12 col-sm-6 col-md-4 col-xl-3 d-flex'>
            <div >
            <Link to={`/list/${id}`}>
              <Card key={id}>
                <div className='image'>
                <Card.Img className='p-3 mx-auto' variant="top" src={image} />
                </div>
                <Card.Body className='' >
                    <Card.Title className='card__title'>{title}</Card.Title>
                    <Card.Text>
                    {price}
                    </Card.Text>
                    <Button className='text-center' variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Link>
            </div>
        </div>
    )
});

return <div className='container'>
    <h1 className='text-center mb-4 mt-4'>Shop</h1>
    <div className='row d-flex justify-content-center'>
{list}</div></div>
}

export default Product;
