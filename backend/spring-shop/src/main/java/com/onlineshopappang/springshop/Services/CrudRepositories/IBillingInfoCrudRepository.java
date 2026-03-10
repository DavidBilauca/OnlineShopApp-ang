package com.onlineshopappang.springshop.Services.CrudRepositories;

import com.onlineshopappang.springshop.Models.Dbtos.BillingInfoDbto;
import com.onlineshopappang.springshop.Models.Dbtos.ProductDbto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface IBillingInfoCrudRepository extends JpaRepository<BillingInfoDbto, UUID> {
    @Query(value = "select b from BillingInfoDbto b where b.user.id=?1")
    Optional<List<BillingInfoDbto>> findBillingInfoByUserIdByUserId(UUID userId);


}
