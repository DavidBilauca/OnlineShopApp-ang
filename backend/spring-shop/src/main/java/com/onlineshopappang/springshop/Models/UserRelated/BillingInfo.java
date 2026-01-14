package com.onlineshopappang.springshop.Models.UserRelated;

import java.util.UUID;

public class BillingInfo {
    public boolean SameAsShipping=true;
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
}
