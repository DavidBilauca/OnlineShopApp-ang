package com.onlineshopappang.springshop.Models.UserRelated;

import com.onlineshopappang.springshop.Models.Dbtos.BillingInfoDbto;
import com.onlineshopappang.springshop.Models.Dbtos.DeliveryInfoDbto;
import com.onlineshopappang.springshop.Models.Dtos.DeliveryInfoDto;

import java.util.UUID;

public class DeliveryInfo {
    public UUID Id;
    public UUID UserId;
    public User User;
    public String Country;
    public String State;
    public String County;
    public String District;
    public String City;
    public String StreetAddress;
    public String ZipCode;

    public DeliveryInfo(DeliveryInfoDto deliveryDto) {
        Id = deliveryDto.getId();
        City = deliveryDto.getCity();
        Country = deliveryDto.getCountry();
        County = deliveryDto.getCounty();
        District = deliveryDto.getDistrict();
        State = deliveryDto.getState();
        StreetAddress = deliveryDto.getStreetAddress();
        User =  deliveryDto.getUser();
        UserId = deliveryDto.getId();
        ZipCode = deliveryDto.getZipCode();
    }

    public DeliveryInfo(DeliveryInfoDbto delivery) {
        Id = delivery.getId();
        City = delivery.getCity();
        Country = delivery.getCountry();
        County = delivery.getCounty();
        District = delivery.getDistrict();
        State = delivery.getState();
        StreetAddress = delivery.getStreetAddress();
        User =  new User(delivery.getUser());
        UserId = delivery.getId();
        ZipCode = delivery.getZipCode();
    }
}
