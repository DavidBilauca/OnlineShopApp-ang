package com.onlineshopappang.springshop.Api;

import com.onlineshopappang.springshop.Models.Dbtos.FavoriteDbto;
import com.onlineshopappang.springshop.Models.Dbtos.UserDbto;
import com.onlineshopappang.springshop.Models.Dtos.UserDto;
import com.onlineshopappang.springshop.Models.UserRelated.User;
import com.onlineshopappang.springshop.Services.CrudRepositories.ICategoryCrudRepository;
import com.onlineshopappang.springshop.Services.CrudRepositories.IFavoriteCrudRepository;
import com.onlineshopappang.springshop.Services.CrudRepositories.IProductCrudRepository;
import com.onlineshopappang.springshop.Models.Dbtos.CategoryDbto;
import com.onlineshopappang.springshop.Models.Dbtos.ProductDbto;
import com.onlineshopappang.springshop.Models.ProductRelated.Category;
import com.onlineshopappang.springshop.Models.Dtos.CategoryDto;
import com.onlineshopappang.springshop.Models.Dtos.ProductDto;
import com.onlineshopappang.springshop.Models.ProductRelated.Product;
import com.onlineshopappang.springshop.Services.CrudRepositories.IUserCrudRepository;
import com.onlineshopappang.springshop.Services.FavoriteService;
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
    @Autowired
    private IUserCrudRepository _userRepo;
    @Autowired
    private FavoriteService _favoriteService;


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

    @GetMapping("/defaultUser")
    public ResponseEntity<UserDto> getDefaultUser(){
        var defaultUser = _userRepo.findDefaultUser();
        if(defaultUser.isPresent()){
            UserDto result = new UserDto(defaultUser.get());
            return ResponseEntity.ok(result);
        }
        else {
            return ResponseEntity.notFound().eTag("Default user not found. Check the server or db").build();
        }
    }


    @PutMapping("/toggleFavorite/{productId}")
    public ResponseEntity<Boolean> toggleFavorite(@PathVariable String productId,@RequestBody String userId) throws Exception {
        UUID productUuid = UUID.fromString(productId);
        UUID userUuid = UUID.fromString(userId);
        var favorite = _favoritesRepo.findByProductId(productUuid);
        //if product is set to favorite then toggle to un-favorite
        if(favorite.isPresent()){
           _favoritesRepo.delete(favorite.get());
            //returns false to toggle favorite to false on the frontend if it is already set to fav.
            return ResponseEntity.ok(false);
            //return ResponseEntity.notFound().build();
        }
        else {
            try{
                _favoriteService.save(productUuid,userUuid);
            } catch (Exception e){
                ResponseEntity.notFound().eTag(e.getMessage()).build();
            }
            return ResponseEntity.ok(true);
        }

    }

    @GetMapping("/favorites/{userId}")
    public ResponseEntity<Iterable<ProductDto>> getFavorites(@PathVariable UUID userId){
        var favorites = _favoritesRepo.findFavoritesByUserId(userId);
        if(!favorites.isPresent()) return ResponseEntity.notFound().build();
        List<ProductDto> result=favorites.get()
                .stream()
                .map(productDbto -> new ProductDto(new Product(productDbto)))
                .toList();
        return ResponseEntity.ok(result);

    }
}
