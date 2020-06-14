import React, {Component} from 'react';
import {Modal,Button, Row, Col, Form, Image} from 'react-bootstrap';
import ProductService from './ProductService';
import ProductDropzone2 from './ProductDropzone2';

const imageMaxSize = 16000000;
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg';
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {return item.trim()})

class AddProductModal extends Component {
    constructor(props){
        super(props);
        this.ProductService = new ProductService();
        this.handleDropImage = this.handleDropImage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { image: '' }
    }

    handleDropImage(imageBinaryStr) {
        this.setState({image:imageBinaryStr});
    }

    handleSubmit(event) {
        const {image} = this.state;
        event.preventDefault();
        const p = event.target;
        this.ProductService.create({
            name: p.productName.value,
            price: p.productPrice.value,
            quantity: p.productQuantity.value,
            color: p.productColor.value,
            image: image,
        });
    }

    render() {
        const {image} = this.state;
        return (
            <Modal
                {...this.props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Product
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Row>
                    <Col sm={12}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="productName">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control placeholder="Product Name" />
                            <Form.Text></Form.Text>
                        </Form.Group>

                        <Form.Group controlid="productImage">
                            <Row>
                                <Image src={image}></Image>
                                <ProductDropzone2 onImageDrop={this.handleDropImage}></ProductDropzone2>
                            </Row>
                        </Form.Group>

                        <Form.Group controlId="productPrice">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control placeholder="Product Price" />
                        </Form.Group>

                        <Form.Group controlId="productQuantity">
                            <Form.Label>Product Quantity</Form.Label>
                            <Form.Control placeholder="Product Quantity" />
                        </Form.Group>

                        <Form.Group controlId="productColor">
                            <Form.Label>Product Color</Form.Label>
                            <Form.Control placeholder="Product Color" />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Button variant="primary" type="submit">Add</Button>
                            </Col>
                            <Col>
                                <Button variant="outline-dark" onClick={this.props.onHide}>Close</Button>
                            </Col>
                        </Row>
                    </Form>
                    </Col>
                </Row>
                </Modal.Body>
            </Modal>
        )
    }
}

export default AddProductModal