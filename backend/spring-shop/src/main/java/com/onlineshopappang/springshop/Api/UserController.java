package com.onlineshopappang.springshop.Api;

import com.onlineshopappang.springshop.Models.Dbtos.BillingInfoDbto;
import com.onlineshopappang.springshop.Models.Dtos.BillingInfoDto;
import com.onlineshopappang.springshop.Models.Dtos.CategoryDto;
import com.onlineshopappang.springshop.Models.Dtos.DeliveryInfoDto;
import com.onlineshopappang.springshop.Models.UserRelated.BillingInfo;
import com.onlineshopappang.springshop.Models.UserRelated.DeliveryInfo;
import com.onlineshopappang.springshop.Services.CrudRepositories.IBillingInfoCrudRepository;
import com.onlineshopappang.springshop.Services.CrudRepositories.IDeliveryInfoCrudRepository;
import com.onlineshopappang.springshop.Services.CrudRepositories.IUserCrudRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin
@RestController
@AllArgsConstructor
@RequestMapping("/User")
public class UserController {
    @Autowired
    private IUserCrudRepository _userRepo;
    @Autowired
    private IBillingInfoCrudRepository _billingRepo;
    @Autowired
    private IDeliveryInfoCrudRepository _deliveryRepo;

    @GetMapping("/billingInfo/{userId}")
    public ResponseEntity<Iterable<BillingInfoDto>> GetAllBillingInfos(@PathVariable UUID userId){
        var billingOpt = _billingRepo.findBillingInfoByUserIdByUserId(userId);
        if(!billingOpt.isPresent()) return ResponseEntity.notFound().build();
        List<BillingInfoDto> billingDtos = billingOpt.get().stream()
                .map(billingInfoDbto ->
                        new BillingInfoDto(
                        new BillingInfo(billingInfoDbto)))
                .toList();
        return ResponseEntity.ok(billingDtos);
    }

    @PutMapping("/billingInfo/update/{id}")
    public ResponseEntity<BillingInfoDto> UpdateBilling(@PathVariable UUID id,@RequestBody BillingInfoDto newBilling){
        var billingOpt = _billingRepo.findById(newBilling.id);
        if(!billingOpt.isPresent()) return ResponseEntity.notFound().build();

        //temporary return below; need to finish
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/deliveryInfo/{userId}")
    public ResponseEntity<Iterable<DeliveryInfoDto>> GetAllDeliveryInfos(@PathVariable UUID userId){
        var deliveryOpt = _deliveryRepo.findDeliveryInfoByUserId(userId);
        if(!deliveryOpt.isPresent()) return ResponseEntity.notFound().build();
        List<DeliveryInfoDto> deliveryInfoDtos = deliveryOpt.get().stream()
                .map(deliveryInfoDbto ->
                        new DeliveryInfoDto(
                                new DeliveryInfo(deliveryInfoDbto)))
                .toList();
        return ResponseEntity.ok(deliveryInfoDtos);
    }

    @PutMapping("/deliveryInfo/update/{id}")
    public ResponseEntity<DeliveryInfoDto> UpdateDelivery(@PathVariable UUID id){
        return ResponseEntity.notFound().build();
    }
}
