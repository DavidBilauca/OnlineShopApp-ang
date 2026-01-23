package com.onlineshopappang.springshop;

import com.onlineshopappang.springshop.Models.Dbtos.CategoryDbto;
import com.onlineshopappang.springshop.Models.Dbtos.ProductDbto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ICategoryCrudRepository extends JpaRepository<CategoryDbto, Long> {

}
