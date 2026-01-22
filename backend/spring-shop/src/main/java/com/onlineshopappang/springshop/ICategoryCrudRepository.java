package com.onlineshopappang.springshop;

import com.onlineshopappang.springshop.Models.Dbtos.CategoryDbto;
import com.onlineshopappang.springshop.Models.Dbtos.ProductDbto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICategoryCrudRepository extends JpaRepository<CategoryDbto,Long> {

}
