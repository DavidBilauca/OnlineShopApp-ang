package com.onlineshopappang.springshop.Services.ProductRelated;

import com.onlineshopappang.springshop.Models.ProductRelated.Product;
import com.onlineshopappang.springshop.Services.IService;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class ProductService implements IService<Product> {
    @Override
    public void Create(Product entity) {
        System.out.println("ProductService: Create\n");
    }

    @Override
    public void Update(Product entity) {

    }

    @Override
    public void Delete(UUID entityId) {

    }
}
