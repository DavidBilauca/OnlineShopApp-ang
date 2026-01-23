package com.onlineshopappang.springshop;

import com.onlineshopappang.springshop.Models.Dbtos.ProductDbto;
import com.onlineshopappang.springshop.Services.ProductRelated.ProductRepository;
import com.onlineshopappang.springshop.Services.ProductRelated.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.io.OutputStreamWriter;
import java.util.List;

@SpringBootApplication
public class SpringShopApplication {

    @Autowired
    IProductCrudRepository productCrudRepository;

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(SpringShopApplication.class, args);

        //var products = productCrudRepository.findAll();
//        var products = findProducts();
//        System.out.println("Products: \n");
//        products.forEach(p->System.out.println(p+"\n"));

    }
//    public static List<ProductDbto> findProducts(){
//        return productCrudRepository.findAll();
//    }

}
