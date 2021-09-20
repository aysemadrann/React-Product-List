import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {

    return (
        <div>
            <Link className='shop__text' to='/'><h1 className='text-center mb-4 mt-4'>Shop</h1></Link>
            <h4 className='d-flex justify-content-end'>Number : {props.number}</h4>
            <h4 className='d-flex justify-content-end'>Price : {props.price} $</h4>
        </div>
    )
}

export default Navbar;
