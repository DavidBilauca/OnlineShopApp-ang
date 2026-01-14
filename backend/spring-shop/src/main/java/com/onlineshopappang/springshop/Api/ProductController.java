package com.onlineshopappang.springshop.Api;

import com.onlineshopappang.springshop.Models.ProductRelated.Product;
import com.onlineshopappang.springshop.Services.IService;
import com.onlineshopappang.springshop.Services.ProductRelated.ProductService;
import org.springframework.stereotype.Controller;

@Controller
public class ProductController {
    private IService<Product> _productService;

    public ProductController(IService<Product> productService){
        this._productService = productService;
    }

}
