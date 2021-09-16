import axios from 'axios';
import React, { useState, useEffect } from 'react';


function Home() {

const [product, setProduct] = useState([]);

useEffect(() => {
    axios('https://fakestoreapi.com/products')
    .then(res => {
        console.log(res)
        setProduct(res.data)
    })
}, []);

const list = product.map((post) => {
    const { id, title, image } = post;



    return (
        
            <div className='row' key={id}>
                <h6>{title}</h6>
                <img src={image} alt={title} />
            </div>
        
    )
});

return <>{list}</>
}

export default Home;
