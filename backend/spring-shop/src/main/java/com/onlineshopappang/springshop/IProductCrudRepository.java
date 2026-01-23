package com.onlineshopappang.springshop;

import com.onlineshopappang.springshop.Models.Dbtos.ProductDbto;
import com.onlineshopappang.springshop.Models.ProductRelated.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface IProductCrudRepository extends JpaRepository<ProductDbto, Long> {

}
