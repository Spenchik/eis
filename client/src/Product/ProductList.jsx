import React, {Component} from 'react';
import Product from './Product'
import PropTypes from 'prop-types';
import { Container, Row, Col, ButtonToolbar, Button, Form, Navbar, FormControl  }  from 'react-bootstrap';
import AddProductModal from './AddProductModal';
import ProductService from './ProductService';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.productService = new ProductService();
        this.state = {products: [], searchBy: '', addModalShow: false }
    }

    componentDidMount() {
        this.refreshList();
    }

    handleSearch(event) {
        let searchStr = event.target.value;
        setTimeout(() => {
            this.setState({searchBy:searchStr});   
        }, 3000);             
    }

    removeProduct(productId) {
        debugger;
        this.productService.delete(productId);
        this.refreshList();
    }

    refreshList() {
        this.productService.getAll()
        .then(response => response.data)
        .then(products => {
            this.setState({products:products});
        });
    }

    render(){
        const {products} = this.state;
        // let filteredProducts = this.state.products.filter(p=>{
        //     return p.name.toLowerCase().indexOf(this.state.searchBy.toLowerCase()) !== -1;
        // });
        // debugger;
        let addModalClose = () => this.setState({addModalShow:false});
        return (
            <div>
                <Navbar>
                    <Form inline>
                        {/* <Button variant="outline-success" onClick={()=>this.setState({searchBy})}>Search</Button> */}
                        <FormControl value={this.state.searchBy}  type="text" placeholder="Search" onChange={()=>this.handleSearch()}></FormControl>
                    </Form>
                </Navbar>
                <ButtonToolbar>
                    <Button variant='outline-primary' onClick={()=>this.setState({addModalShow:true})}>
                        Add Product
                    </Button>
                    <AddProductModal 
                        show={this.state.addModalShow}
                        onHide={addModalClose}
                    >                        
                    </AddProductModal>
                </ButtonToolbar>
                <Container>
                    <Row>
                        {products.map((p,index) => {
                            return (
                                <Col xs="4" key={index}>
                                    <Product onDelete={this.removeProduct} product={p} key={index}  index={index}/>
                                </Col>
                            )                    
                        })}
                    </Row>
                </Container>
            </div>
        )
    }
}

PropTypes.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ProductList