import React, { useEffect, useState } from 'react';
import ProductList from './Product/ProductList';
import ProductSearch from './Product/ProductList';
import AddProductModal from './Product/AddProductModal';
import ProductDropzone from './Product/ProductDropzone';
import Context from './context';
import ProductService from './Product/ProductService';
import { Button } from 'react-bootstrap';
import Product from './Product/Product';

function App() {
  const [image, setDropedImage] = useState('');
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});

  function onImageDrop(image){
    //setDropedImage(image);
    setCurrentProduct(currentProduct.image)
    console.log(image);
  }

  function addProduct(dropedImage) {
    setDropedImage(dropedImage);
  }

  function removeProduct(productId) {
    setProducts(products.filter(p=>p.id !== productId));
  }

  return (
    <Context.Provider value={{ removeProduct, onImageDrop }}>
      <div className="container">
        <AddProductModal></AddProductModal>
        <ProductDropzone></ProductDropzone>
        <ProductList></ProductList>
        {/* {products.length ? <ProductList/> : <p>No Products</p>} */}
      </div>
    </Context.Provider>
  );
}

export default App;
