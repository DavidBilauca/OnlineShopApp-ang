package com.onlineshopappang.springshop.Services.CrudRepositories;

import com.onlineshopappang.springshop.Models.Dbtos.ListItemDbto;
import com.onlineshopappang.springshop.Models.Dbtos.ShoppingCartDbto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface IShoppingCartCrudRepository extends JpaRepository<ShoppingCartDbto, UUID> {
    @Query("select cart from ShoppingCartDbto cart where cart.user.id=?1")
    //@NativeQuery(value="select * from ")
    public Optional<ShoppingCartDbto> findByUserId(UUID id);
}
