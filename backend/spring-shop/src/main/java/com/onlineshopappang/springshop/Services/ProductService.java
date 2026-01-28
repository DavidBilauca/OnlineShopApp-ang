package com.onlineshopappang.springshop.Services;

import com.onlineshopappang.springshop.Services.CrudRepositories.IProductCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    @Autowired
    private IProductCrudRepository _productRepo;


}
