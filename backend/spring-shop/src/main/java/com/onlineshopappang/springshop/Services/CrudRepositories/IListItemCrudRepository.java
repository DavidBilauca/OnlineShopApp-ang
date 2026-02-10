package com.onlineshopappang.springshop.Services.CrudRepositories;

import com.onlineshopappang.springshop.Models.Dbtos.FavoriteDbto;
import com.onlineshopappang.springshop.Models.Dbtos.ListItemDbto;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface IListItemCrudRepository extends JpaRepository<ListItemDbto, UUID> {
    @Query("select li from ListItemDbto li where li.product.id=?1")
    //@NativeQuery(value="select * from ")
    public Optional<ListItemDbto> findByProductId(UUID id);

    @Modifying
    @Transactional
    @Query("update ListItemDbto as li set li.quantity = ?2 where li.id=?1")
    public int updateQuantity(UUID id,Integer quantity);

    @Query("select li from ListItemDbto li where li.list.id=?1")
    public Optional<List<ListItemDbto>> findAllByListId(UUID listId);
}
