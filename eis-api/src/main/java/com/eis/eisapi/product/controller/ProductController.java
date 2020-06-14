package com.eis.eisapi.product.controller;

import com.eis.eisapi.product.model.Product;
import com.eis.eisapi.product.service.ProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductController {
    @Autowired
    ProductService productService;

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @PostMapping(value= "/products")
    public String create(@RequestBody Product p) {
        logger.debug("Saving product.");
        productService.createProduct(p);
        return "Product created.";
    }

    @GetMapping(value= "/products")
    public Collection<Product> getAll() {
;        logger.debug("Getting all products.");
        return productService.getAllProducts();
    }

    @GetMapping(value= "/products/{id}")
    public Optional<Product> getById(@PathVariable(value= "id") String id) {
        logger.debug("Getting products with product-id = {}.", id);
        return productService.findProductById(id);
    }

    @PutMapping(value= "/products/{id}")
    public String update(@PathVariable(value= "id") @RequestBody Product p) {
        logger.debug("Updating product with product-id = {}.", p.getId());
        productService.updateProduct(p);
        return "Employee record for employee-id= " + p.getId() + " updated.";
    }

    @DeleteMapping(value= "/products/{id}")
    public String delete(@PathVariable(value= "id") String id) {
        logger.debug("Deleting product with product-id = {}.", id);
        productService.deleteProductById(id);
        return "Product record for product-id= " + id + " deleted.";
    }
}
