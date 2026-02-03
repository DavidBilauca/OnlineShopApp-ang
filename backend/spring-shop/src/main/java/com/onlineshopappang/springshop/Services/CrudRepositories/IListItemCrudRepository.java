package com.onlineshopappang.springshop.Services.CrudRepositories;

import com.onlineshopappang.springshop.Models.Dbtos.FavoriteDbto;
import com.onlineshopappang.springshop.Models.Dbtos.ListItemDbto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface IListItemCrudRepository extends JpaRepository<ListItemDbto, UUID> {
    @Query("select li from ListItemDbto li where li.product.id=?1")
    //@NativeQuery(value="select * from ")
    public Optional<ListItemDbto> findByProductId(UUID id);

    @Query("update ListItemDbto as li set li.quantity = ?2 where li.product.id=?1")
    public void updateQuantity(UUID id,Integer quantity);
}
