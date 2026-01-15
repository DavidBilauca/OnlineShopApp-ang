package com.onlineshopappang.springshop.Api;

import com.onlineshopappang.springshop.Models.ProductRelated.Product;
import com.onlineshopappang.springshop.Services.IRepository;
import com.onlineshopappang.springshop.Services.IService;
import com.onlineshopappang.springshop.Services.ProductRelated.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpResponse;
import java.util.UUID;

@CrossOrigin
@RestController
//@AllArgsConstructor
public class ProductController {
    private IService<Product> _productService;
    private IRepository<Product> _productRepository;

    public ProductController(IService<Product> productService,IRepository<Product> productRepository){
        this._productService = productService;
        this._productRepository = productRepository;
    }

    @GetMapping("/products")
    public ResponseEntity<Iterable<Product>> getAllProducts(){
        var results = _productRepository.GetAll();
        if(results == null) return ResponseEntity.notFound().build();
        return new ResponseEntity<Iterable<Product>>(results, HttpStatus.OK);
    }
    @GetMapping("/products/{id}")
    public Product getProduct(@PathVariable String id){
        UUID uuid = UUID.fromString(id);
        return _productRepository.GetById(uuid);
    }
}
