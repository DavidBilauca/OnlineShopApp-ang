package com.onlineshopappang.springshop.Models.Dtos;

import com.onlineshopappang.springshop.Models.UserRelated.DeliveryInfo;
import com.onlineshopappang.springshop.Models.UserRelated.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@AllArgsConstructor
@Getter
@Setter
public class DeliveryInfoDto {
    public UUID id;
    public UUID userId;
    public User user;
    public String country;
    public String state;
    public String county;
    public String district;
    public String city;
    public String streetAddress;
    public String zipCode;

    public DeliveryInfoDto(DeliveryInfo delivery){
        id = delivery.Id;
        user = delivery.User;
        country = delivery.Country;
        state = delivery.State;
        county = delivery.County;
        district = delivery.District;
        city= delivery.City;
        streetAddress = delivery.StreetAddress;
        zipCode = delivery.ZipCode;
    }
}
