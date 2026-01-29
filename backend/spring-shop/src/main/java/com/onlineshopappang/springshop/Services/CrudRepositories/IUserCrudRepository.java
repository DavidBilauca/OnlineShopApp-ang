package com.onlineshopappang.springshop.Services.CrudRepositories;

import com.onlineshopappang.springshop.Models.Dbtos.FavoriteDbto;
import com.onlineshopappang.springshop.Models.Dbtos.UserDbto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface IUserCrudRepository extends JpaRepository<UserDbto, UUID> {
    @Query("select u from UserDbto u where u.username = 'david_admin'")
    //@NativeQuery(value="select * from ")
    public Optional<UserDbto> findDefaultUser();

//    @Query("update UserDbto set favorites = array_append(?1) where id = ?2")
//    public void addFavorite(UUID productId,UUID userId);
//
//    @Query("update UserDbto set favorites = array_remove(?1) where id = ?2")
//    public void removeFavorite(UUID productId,UUID userId);

//    @Query("select array_contains(?1) from UserDbto where id = ?2")
//    public boolean checkFavorite(UUID productId,UUID userId);


}
