package com.onlineshopappang.springshop.Services;

import com.onlineshopappang.springshop.Models.Dbtos.*;
import com.onlineshopappang.springshop.Services.CrudRepositories.IListItemCrudRepository;
import com.onlineshopappang.springshop.Services.CrudRepositories.IProductCrudRepository;
import com.onlineshopappang.springshop.Services.CrudRepositories.IShoppingCartCrudRepository;
import com.onlineshopappang.springshop.Services.CrudRepositories.IUserCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class ListItemService {
    @Autowired
    IListItemCrudRepository _listItemRepo;
    @Autowired
    IUserCrudRepository _userRepo;
    @Autowired
    IProductCrudRepository _productRepo;
    @Autowired
    IShoppingCartCrudRepository _cartRepo;


    public void save(UUID productId, UUID userId,Integer quantity) throws Exception {
        var userOpt = _userRepo.findById(userId);
        var shoppingCartOpt = _cartRepo.findByUserId(userId);
        var productOpt = _productRepo.findById(productId);
        UserDbto user;
        ShoppingCartDbto shoppingCart;
        ProductDbto product;
        if(!userOpt.isPresent()) throw new Exception("Save new favorite error: user not found");
        if(!shoppingCartOpt.isPresent()) throw new Exception("Save new favorite error: shopping cart not found. It should have been initialised!");
        if(!productOpt.isPresent()) throw new Exception("Save new favorite error: product not found");
        user= userOpt.get();
        shoppingCart = shoppingCartOpt.get();
        product = productOpt.get();
        ListItemDbto newCartItem = new ListItemDbto(product,shoppingCart,quantity);
        _listItemRepo.save(newCartItem);
    }
}
