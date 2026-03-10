package com.onlineshopappang.springshop.Models.UserRelated;

import com.onlineshopappang.springshop.Models.Dbtos.BillingInfoDbto;

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
        User =  new User(billing.getUser());
        UserId = billing.getId();
        ZipCode = billing.getZipCode();
    }
}
