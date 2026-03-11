package com.onlineshopappang.springshop.Models.UserRelated;

import com.onlineshopappang.springshop.Models.Dbtos.BillingInfoDbto;
import com.onlineshopappang.springshop.Models.Dtos.BillingInfoDto;

import java.util.UUID;

public class BillingInfo {
    public UUID Id;
    public UUID UserId;
    public User User;
    public String FullName;
    public String Country;
    public String State;
    public String County;
    public String District;
    public String City;
    public String StreetAddress;
    public String ZipCode;
    public String PhoneNumber;
    public void PaymentDetails(){}

    public BillingInfo(BillingInfoDto billingDto){
        Id = billingDto.getId();
        City = billingDto.getCity();
        Country = billingDto.getCountry();
        County = billingDto.getCounty();
        District = billingDto.getDistrict();
        FullName = billingDto.getFullName();
        PhoneNumber = billingDto.getPhoneNumber();
        State = billingDto.getState();
        StreetAddress = billingDto.getStreetAddress();
        User =  billingDto.getUser();
        UserId = billingDto.getId();
        ZipCode = billingDto.getZipCode();
    }

    public BillingInfo(BillingInfoDbto billing) {
        Id = billing.getId();
        City = billing.getCity();
        Country = billing.getCountry();
        County = billing.getCounty();
        District = billing.getDistrict();
        FullName = billing.getFullName();
        PhoneNumber = billing.getPhoneNumber();
        State = billing.getState();
        StreetAddress = billing.getStreetAddress();
        ZipCode = billing.getZipCode();
        User =  new User(billing.getUser());
        UserId = billing.getId();
    }
}
