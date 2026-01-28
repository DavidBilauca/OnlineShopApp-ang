package com.onlineshopappang.springshop.Services.CrudRepositories;

import com.onlineshopappang.springshop.Models.Dbtos.UserDbto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface IUserCrudRepository extends JpaRepository<UserDbto, UUID> {

}
