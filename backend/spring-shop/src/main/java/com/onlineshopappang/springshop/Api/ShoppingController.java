package com.onlineshopappang.springshop.Api;

import com.onlineshopappang.springshop.ICategoryCrudRepository;
import com.onlineshopappang.springshop.IProductCrudRepository;
import com.onlineshopappang.springshop.Models.Dbtos.CategoryDbto;
import com.onlineshopappang.springshop.Models.Dbtos.ProductDbto;
import com.onlineshopappang.springshop.Models.ProductRelated.Category;
import com.onlineshopappang.springshop.Models.Dtos.CategoryDto;
import com.onlineshopappang.springshop.Models.Dtos.ProductDto;
import com.onlineshopappang.springshop.Models.ProductRelated.Product;
import com.onlineshopappang.springshop.Services.IRepository;
import com.onlineshopappang.springshop.Services.IService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@CrossOrigin
@RestController
@AllArgsConstructor
@RequestMapping("/Shopping")
public class ShoppingController {
    @Autowired
    private final IRepository<Category> _categoryRepository;
    @Autowired
    private IService<Product> _productService;
    @Autowired
    private IRepository<Product> _productRepository;
    @Autowired
    private IProductCrudRepository _productCrudRepo;
    @Autowired
    private ICategoryCrudRepository _categoryCrudRepo;


    //private final ObjectMapper mapper;
    //private final CategoryMapper categoryMapper;

    @GetMapping("")
    public ResponseEntity<Iterable<ProductDto>> getAllProducts(){
//       var products = _productRepository.GetAll();
       List<ProductDbto> productDbtos = _productCrudRepo.findAll();
       if(productDbtos.stream().count() == 0 || productDbtos == null)
           return ResponseEntity.notFound().build();

       var products = productDbtos.stream().map(dbto-> new Product(dbto)).toList();
       var productsDtos = products.stream().map(p->new ProductDto(p)).toList();

       return new ResponseEntity<Iterable<ProductDto>>(productsDtos, HttpStatus.OK);
    }

    @GetMapping("/Categories")
    public ResponseEntity<Iterable<CategoryDto>> getAllCategories() {
        List<CategoryDbto> categoryDbtos = _categoryCrudRepo.findAll();
        if(categoryDbtos.stream().count()==0 || categoryDbtos == null)
            return ResponseEntity.notFound().build();

        var categories = categoryDbtos.stream().map(dbto->new Category(dbto)).toList();
        var categoryDtos = categories.stream().map(c->new CategoryDto(c)).toList();

        return new ResponseEntity<Iterable<CategoryDto>>(categoryDtos, HttpStatus.OK);
    }

        @GetMapping("/{id}")
    public ResponseEntity<ProductDto> getProduct(@PathVariable String id){
        UUID uuid = UUID.fromString(id);
        Product product = _productRepository.GetById(uuid);
        if(product == null) return ResponseEntity.notFound().build();

        return ResponseEntity.ok(new ProductDto(product));
    }

    @GetMapping("/toggleFavorite/{id}")
    public ResponseEntity<ProductDto> toggleFavorite(@PathVariable String id){
        UUID uuid = UUID.fromString(id);
        Product product = _productRepository.GetById(uuid);
        if(product != null) return ResponseEntity.ok(new ProductDto(product));
        return null;
    }
}
