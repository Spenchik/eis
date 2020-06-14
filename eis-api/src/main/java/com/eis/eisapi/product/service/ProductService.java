package com.eis.eisapi.product.service;

import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;
import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import com.eis.eisapi.product.model.Product;
import com.eis.eisapi.product.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

public interface ProductService {
    void createProduct(Product p);

    Collection<Product> getAllProducts();

    Optional<Product> findProductById(String id);

    void deleteProductById(String id);

    void updateProduct(Product p);

    @Service
    public class ProductServiceImpl implements ProductService {

        @Autowired
        ProductRepository productRepository;

        @Override
        public void createProduct(Product p) {
            productRepository.save(p);
        }

        @Override
        public Collection<Product> getAllProducts() {
            return productRepository.findAll();
        }

        @Override
        public Optional<Product> findProductById(String id) {
            return productRepository.findById(id);
        }

        @Override
        public void deleteProductById(String id) {
            productRepository.deleteById(id);
        }

        @Override
        public void updateProduct(Product p) {
            productRepository.save(p);
        }
    }
}
