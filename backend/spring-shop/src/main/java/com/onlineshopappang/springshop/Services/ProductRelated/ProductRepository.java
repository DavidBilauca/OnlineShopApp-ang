package com.onlineshopappang.springshop.Services.ProductRelated;

import com.onlineshopappang.springshop.Models.ProductRelated.Product;
import com.onlineshopappang.springshop.Services.IRepository;

import java.util.UUID;
import java.util.function.Function;

public class ProductRepository implements IRepository<Product,Product> {

    @Override
    public void Create(Product entity) {

    }

    @Override
    public void GetAll() {

    }

    @Override
    public void GetById(UUID entityId) {

    }

    @Override
    public void GetByFilter(Function<Product, Product> filter) {

    }

    @Override
    public void Update(Product entity) {

    }

    @Override
    public void Delete(UUID entityId) {

    }
}
