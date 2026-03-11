package com.onlineshopappang.springshop.Services.CrudRepositories;

import com.onlineshopappang.springshop.Models.Dbtos.BillingInfoDbto;
import com.onlineshopappang.springshop.Models.Dbtos.DeliveryInfoDbto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface IDeliveryInfoCrudRepository extends JpaRepository<DeliveryInfoDbto, UUID> {
    @Query(value = "select d from DeliveryInfoDbto d where d.user.id=?1")
    Optional<List<DeliveryInfoDbto>> findDeliveryInfoByUserId(UUID userId);

    @Modifying
    @Transactional
    @Query("update DeliveryInfoDbto as delivery set delivery = ?2 where delivery.id = ?1")
    public int update(UUID id,DeliveryInfoDbto newDeliveryDbto);
}
