import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Image } from 'react-bootstrap';
import Context from '../context';

function Product({product, index}) {
    const { removeProduct } = useContext(Context);
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product._id}</Card.Text>
                <Image style={{width: '15rem'}} src={product.image}></Image>
                <Card.Text>{product.quantity > 0 ? product.quantity : 'Out of order'}</Card.Text>
                <Card.Text>{product.price + ' $'}</Card.Text>
                <Card.Text>{product.color}</Card.Text>
                <Button variant="outline-dark" onClick={removeProduct.bind(null, product.id)}>&times;</Button>
            </Card.Body>
        </Card>
    )
}

Product.propTypes = {
    product: PropTypes.object.isRequired,
    index: PropTypes.number,
    // onChange: PropTypes.func.isRequired
}

export default Product