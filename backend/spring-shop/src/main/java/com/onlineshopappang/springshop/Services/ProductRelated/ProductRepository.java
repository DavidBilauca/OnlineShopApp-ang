package com.onlineshopappang.springshop.Services.ProductRelated;

import com.onlineshopappang.springshop.Models.MockData;
import com.onlineshopappang.springshop.Models.ProductRelated.Product;
import com.onlineshopappang.springshop.Services.IRepository;
import org.springframework.stereotype.Repository;

import java.util.*;
import java.util.function.Predicate;

@Repository
public class ProductRepository implements IRepository<Product> {

    @Override
    public void Create(Product entity) {

    }

    @Override
    public Iterable<Product> GetAll() {
        return MockData.MockProducts;
    }

    @Override
    public Product GetById(UUID entityId) {
        return MockData.MockProducts.stream()
                .filter(product->product.id == entityId)
                .toList()
                .getFirst();
    }

    @Override
    public Iterable<Product> GetByFilter(Predicate<Product> filter) {
        return MockData.MockProducts.stream()
                .filter(filter)
                .toList();
    }

    @Override
    public void Update(Product entity) {
        Product newProduct = GetById(entity.id);
        newProduct.categoryId = entity.categoryId;
        newProduct.category = entity.category;
        newProduct.title = entity.title;
        newProduct.description = entity.description;
        newProduct.price = entity.price;
        newProduct.stock = entity.stock;
        newProduct.rating = entity.rating;
    }

    @Override
    public void Delete(UUID entityId) {

    }
}
