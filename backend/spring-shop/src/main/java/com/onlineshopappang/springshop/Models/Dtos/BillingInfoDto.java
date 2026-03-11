package com.onlineshopappang.springshop.Models.Dtos;

import com.onlineshopappang.springshop.Models.UserRelated.BillingInfo;
import com.onlineshopappang.springshop.Models.UserRelated.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@AllArgsConstructor
@Getter
@Setter
public class BillingInfoDto {
    public UUID id;
    public UUID userId;
    public User user;
    public String fullName;
    public String country;
    public String state;
    public String county;
    public String district;
    public String city;
    public String streetAddress;
    public String zipCode;
    public String phoneNumber;
    public void PaymentDetails(){}

    public BillingInfoDto() {
    }

    public BillingInfoDto(BillingInfo billing){
        id = billing.Id;
        user = billing.User;
        fullName = billing.FullName;
        country = billing.Country;
        state = billing.State;
        county = billing.County;
        district = billing.District;
        city= billing.City;
        streetAddress = billing.StreetAddress;
        zipCode = billing.ZipCode;
        phoneNumber = billing.PhoneNumber;
    }
}
