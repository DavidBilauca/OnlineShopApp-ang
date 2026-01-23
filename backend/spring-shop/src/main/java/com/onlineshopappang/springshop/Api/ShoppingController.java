package com.onlineshopappang.springshop.Api;

import com.onlineshopappang.springshop.ICategoryCrudRepository;
import com.onlineshopappang.springshop.IProductCrudRepository;
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

import java.util.Collection;
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
        // products = _productRepository.GetAll();
        var productDbtos = _productCrudRepo.findAll();

        if((long) productDbtos.size() == 0 ) return ResponseEntity.notFound().build();

//        ArrayList<Product> productsList = new ArrayList<Product>((Collection<Product>) products);
        var products = productDbtos.stream()
                .map(p->new Product(p))
                .toList();

//        if(products == null) return ResponseEntity.notFound().build();

//        var responseData = productsList.stream()
//                .map(mapper::toDto)
//                .toList();
//        var responseData = productsList.stream()
//                .map(p->new ProductDto(p))
//                .toList();
        var responseData = products.stream()
                .map(p->new ProductDto(p))
                .toList();

        return new ResponseEntity<Iterable<ProductDto>>(responseData, HttpStatus.OK);
    }

    @GetMapping("/Categories")
    public ResponseEntity<Iterable<CategoryDto>> getAllCategories() {
        var categoriesDbtos = _categoryCrudRepo.findAll();

        if((long) categoriesDbtos.size() == 0 ) return ResponseEntity.notFound().build();

        var categories = categoriesDbtos.stream().map(
                c->new Category(c)
        ).toList();
        if (categories == null) return ResponseEntity.notFound().build();
        var categoriesDtos = categories.stream()
                .map(c-> new CategoryDto(c))
                .toList();

        return new ResponseEntity<Iterable<CategoryDto>>((Collection) categories, HttpStatus.OK);
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
