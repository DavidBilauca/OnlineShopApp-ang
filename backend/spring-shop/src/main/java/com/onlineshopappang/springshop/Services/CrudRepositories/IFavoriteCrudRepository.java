package com.onlineshopappang.springshop.Services.CrudRepositories;

import com.onlineshopappang.springshop.Models.Dbtos.FavoriteDbto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.NativeQuery;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface IFavoriteCrudRepository extends JpaRepository<FavoriteDbto, UUID> {

    @Query("select f from FavoriteDbto f where f.product.id=?1")
    //@NativeQuery(value="select * from ")
    public Optional<FavoriteDbto> findByProductId(UUID id);
}
