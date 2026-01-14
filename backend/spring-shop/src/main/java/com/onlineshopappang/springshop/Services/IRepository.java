package com.onlineshopappang.springshop.Services.ProductRelated;

import com.onlineshopappang.springshop.Models.ProductRelated.Product;

import java.util.UUID;

public interface Repository {
    void Create(Product entity);

    void GetAll();

    void GetById(UUID entityId);

    void GetByFilter();

    void Update(UUID entityId);

    void Delete(UUID entityId);
}
