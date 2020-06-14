import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductSearch({product, index}) {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Text>{product.quantity}</Card.Text>
                <Card.Text>{product.price}</Card.Text>
                <Card.Text>{product.color}</Card.Text>
                <Button variant="outline-dark">&times;</Button>
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