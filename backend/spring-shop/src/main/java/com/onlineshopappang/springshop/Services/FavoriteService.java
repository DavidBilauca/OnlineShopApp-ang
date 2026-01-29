package com.onlineshopappang.springshop.Services;

import com.onlineshopappang.springshop.Models.Dbtos.FavoriteDbto;
import com.onlineshopappang.springshop.Models.Dbtos.ProductDbto;
import com.onlineshopappang.springshop.Models.Dbtos.UserDbto;
import com.onlineshopappang.springshop.Services.CrudRepositories.IFavoriteCrudRepository;
import com.onlineshopappang.springshop.Services.CrudRepositories.IProductCrudRepository;
import com.onlineshopappang.springshop.Services.CrudRepositories.IUserCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class FavoriteService {
    @Autowired
    private IFavoriteCrudRepository _favoriteRepo;
    @Autowired
    private IUserCrudRepository _userRepo;
    @Autowired
    private IProductCrudRepository _productRepo;



    public void save(UUID productId, UUID userId) throws Exception {
        var userOpt = _userRepo.findById(userId);
        var productOpt = _productRepo.findById(productId);
        UserDbto user;
        ProductDbto product;
        if(!userOpt.isPresent()) throw new Exception("Save new favorite error: user not found");
        if(!productOpt.isPresent()) throw new Exception("Save new favorite error: product not found");
        user= userOpt.get();
        product = productOpt.get();
        FavoriteDbto newFavorite = new FavoriteDbto(product,user);
        _favoriteRepo.save(newFavorite);
    }
}
