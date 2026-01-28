package com.onlineshopappang.springshop.Api;

import com.onlineshopappang.springshop.Services.CrudRepositories.ICategoryCrudRepository;
import com.onlineshopappang.springshop.Services.CrudRepositories.IFavoriteCrudRepository;
import com.onlineshopappang.springshop.Services.CrudRepositories.IProductCrudRepository;
import com.onlineshopappang.springshop.Models.Dbtos.CategoryDbto;
import com.onlineshopappang.springshop.Models.Dbtos.ProductDbto;
import com.onlineshopappang.springshop.Models.ProductRelated.Category;
import com.onlineshopappang.springshop.Models.Dtos.CategoryDto;
import com.onlineshopappang.springshop.Models.Dtos.ProductDto;
import com.onlineshopappang.springshop.Models.ProductRelated.Product;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin
@RestController
@AllArgsConstructor
@RequestMapping("/Shopping")
public class ShoppingController {
//    @Autowired
//    private final IRepository<Category> _categoryRepository;
//    @Autowired
//    private IService<Product> _productService;
//    @Autowired
//    private IRepository<Product> _productRepository;
    @Autowired
    private IProductCrudRepository _productsRepo;
    @Autowired
    private ICategoryCrudRepository _categoriesRepo;
    @Autowired
    private IFavoriteCrudRepository _favoritesRepo;


    //private final ObjectMapper mapper;
    //private final CategoryMapper categoryMapper;

    @GetMapping("")
    public ResponseEntity<Iterable<ProductDto>> getAllProducts(){
//       var products = _productRepository.GetAll();
       List<ProductDbto> productDbtos = _productsRepo.findAll();
       if(productDbtos.stream().count() == 0 || productDbtos == null)
           return ResponseEntity.notFound().build();

       var products = productDbtos.stream().map(dbto-> new Product(dbto)).toList();
       var productsDtos = products.stream().map(p->new ProductDto(p)).toList();

       return new ResponseEntity<Iterable<ProductDto>>(productsDtos, HttpStatus.OK);
    }

    @GetMapping("/Categories")
    public ResponseEntity<Iterable<CategoryDto>> getAllCategories() {
        List<CategoryDbto> categoryDbtos = _categoriesRepo.findAll();
        if(categoryDbtos.stream().count()==0 || categoryDbtos == null)
            return ResponseEntity.notFound().build();

        var categories = categoryDbtos.stream().map(dbto->new Category(dbto)).toList();
        var categoryDtos = categories.stream().map(c->new CategoryDto(c)).toList();

        return new ResponseEntity<Iterable<CategoryDto>>(categoryDtos, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductDto> getProduct(@PathVariable String id){
        UUID uuid = UUID.fromString(id);
        var productDbto = _productsRepo.findById(uuid);
        if(productDbto.isPresent())
            return ResponseEntity.ok(
                    new ProductDto(
                            new Product(productDbto.get())
                    ));
        else
            return ResponseEntity.notFound().build();
    }

    @GetMapping("/toggleFavorite/{productId}")
    public ResponseEntity<Boolean> toggleFavorite(@PathVariable String productId){
        UUID uuid = UUID.fromString(productId);
        var favorite = _favoritesRepo.findByProductId(uuid);
        if(favorite.isPresent())
            return ResponseEntity.ok(true);
        else return ResponseEntity.notFound().build();
    }
}
