package com.onlineshopappang.springshop.Api;

import com.onlineshopappang.springshop.Models.Dbtos.BillingInfoDbto;
import com.onlineshopappang.springshop.Models.Dbtos.DeliveryInfoDbto;
import com.onlineshopappang.springshop.Models.Dbtos.UserDbto;
import com.onlineshopappang.springshop.Models.Dtos.BillingInfoDto;
import com.onlineshopappang.springshop.Models.Dtos.CategoryDto;
import com.onlineshopappang.springshop.Models.Dtos.DeliveryInfoDto;
import com.onlineshopappang.springshop.Models.UserRelated.BillingInfo;
import com.onlineshopappang.springshop.Models.UserRelated.DeliveryInfo;
import com.onlineshopappang.springshop.Models.UserRelated.User;
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

    @PostMapping("/billingInfo/update")
    public ResponseEntity<BillingInfoDto> UpdateBilling(@RequestBody BillingInfoDto newBillingDto){
        newBillingDto.user = new User(fillInUser(newBillingDto.userId));
        var billingOpt = _billingRepo.findById(newBillingDto.id);
        try {
            BillingInfoDbto newBillingDbto = new BillingInfoDbto(new BillingInfo(newBillingDto));
            if (!billingOpt.isPresent()) {
                _billingRepo.save(new BillingInfoDbto(new BillingInfo(newBillingDto)));}
            else {
                _billingRepo.update(newBillingDbto.getId(),newBillingDbto);
            }
        }catch (Exception e){
            return ResponseEntity.notFound().eTag("Could not update selected billing info entry. Try again later").build();
        }
        //temporary return below; need to finish
        return ResponseEntity.ok(newBillingDto);
    }

    @PostMapping("/deliveryInfo/update")
    public ResponseEntity<DeliveryInfoDto> UpdateDelivery(@RequestBody DeliveryInfoDto newDeliveryDto){
        newDeliveryDto.user = new User(fillInUser(newDeliveryDto.userId));
        var deliveryOpt = _deliveryRepo.findById(newDeliveryDto.id);
        try {
            DeliveryInfoDbto newDeliveryDbto = new DeliveryInfoDbto(new DeliveryInfo(newDeliveryDto));
            if (!deliveryOpt.isPresent()) {
                _deliveryRepo.save(new DeliveryInfoDbto(new DeliveryInfo(newDeliveryDto)));}
            else {
                _deliveryRepo.update(newDeliveryDbto.getId(),newDeliveryDbto);
            }
        }catch (Exception e){
            return ResponseEntity.notFound().eTag("Could not update selected delivery info entry. Try again later").build();
        }
        return ResponseEntity.ok(newDeliveryDto);
    }

    private UserDbto fillInUser(UUID userId){
        var userDbto = _userRepo.findById(userId);
        if(!userDbto.isPresent()) return null;
        return userDbto.get();
    }
}
