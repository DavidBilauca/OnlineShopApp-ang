package com.onlineshopappang.springshop.Api;

import com.onlineshopappang.springshop.IProductCrudRepository;
import com.onlineshopappang.springshop.Mappers.CategoryMapper;
import com.onlineshopappang.springshop.Mappers.ProductMapper;
import com.onlineshopappang.springshop.Models.ProductRelated.Category;
import com.onlineshopappang.springshop.Models.Dtos.CategoryDto;
import com.onlineshopappang.springshop.Models.Dtos.ProductDto;
import com.onlineshopappang.springshop.Models.ProductRelated.Product;
import com.onlineshopappang.springshop.Services.IRepository;
import com.onlineshopappang.springshop.Services.IService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.UUID;

@CrossOrigin
@RestController
@AllArgsConstructor
@RequestMapping("/Shopping")
public class ShoppingController {
    private final IRepository<Category> _categoryRepository;
    private IService<Product> _productService;
    private IRepository<Product> _productRepository;
   // private IProductCrudRepository _productCrudRepo;

    private ProductMapper productMapper;
    private CategoryMapper categoryMapper;


    @GetMapping("")
    public ResponseEntity<Iterable<ProductDto>> getAllProducts(){
        var products = _productRepository.GetAll();
        //var products = _productCrudRepo.findAll();

        ArrayList<Product> productsList = new ArrayList<>((Collection) products);

        if(productsList == null) return ResponseEntity.notFound().build();

        var responseData = productsList.stream()
                .map(productMapper::toDto)
                .toList();

        return new ResponseEntity<Iterable<ProductDto>>(responseData, HttpStatus.OK);
    }

    @GetMapping("/Categories")
    public ResponseEntity<Iterable<CategoryDto>> getAllCategories() {
        var categories = new ArrayList<>((Collection<Category>)_categoryRepository.GetAll());

        if (categories == null) return ResponseEntity.notFound().build();
        var categoriesDtos = categories.stream()
                .map(categoryMapper::toDto)
                .toList();

        return new ResponseEntity<Iterable<CategoryDto>>((Collection) categories, HttpStatus.OK);
    }

        @GetMapping("/{id}")
    public ResponseEntity<ProductDto> getProduct(@PathVariable String id){
        UUID uuid = UUID.fromString(id);
        Product product = _productRepository.GetById(uuid);
        if(product == null) return ResponseEntity.notFound().build();

        return ResponseEntity.ok(productMapper.toDto(product));
    }

    @GetMapping("/toggleFavorite/{id}")
    public ResponseEntity<ProductDto> toggleFavorite(@PathVariable String id){
        UUID uuid = UUID.fromString(id);
        Product product = _productRepository.GetById(uuid);
        if(product != null) return ResponseEntity.ok(productMapper.toDto(product));
        return null;
    }
}
