package com.onlineshopappang.springshop;

import com.onlineshopappang.springshop.Services.ProductRelated.ProductRepository;
import com.onlineshopappang.springshop.Services.ProductRelated.ProductService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.io.OutputStreamWriter;

@SpringBootApplication
public class SpringShopApplication {

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(SpringShopApplication.class, args);
        var productRepository = context.getBean(ProductRepository.class);
        var productService = context.getBean(ProductService.class);
        //IProductCrudRepository productCrudRepositoryImpl;
        //var productCrudRepository = context.getBean(IProductCrudRepository.class);

        //productService.Create(new Product());


    }

}
