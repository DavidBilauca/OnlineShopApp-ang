package com.onlineshopappang.springshop.Models.Dbtos;

import com.onlineshopappang.springshop.Models.UserRelated.BillingInfo;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "billing_info")
public class BillingInfoDbto {
    @Id
    @Column(name = "id", nullable = false)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "user_id", nullable = false)
    private UserDbto user;

    @Column(name = "full_name", nullable = false, length = 100)
    private String fullName;

    @Column(name = "country", nullable = false, length = 60)
    private String country;

    @Column(name = "state", length = 60)
    private String state;

    @Column(name = "county", length = 60)
    private String county;

    @Column(name = "district", length = 60)
    private String district;

    @Column(name = "city", nullable = false, length = 100)
    private String city;

    @Column(name = "street_address", nullable = false, length = 150)
    private String streetAddress;

    @Column(name = "zip_code", length = 20)
    private String zipCode;

    @Column(name = "phone_number", nullable = false, length = 15)
    private String phoneNumber;


    public BillingInfoDbto(BillingInfo newBilling) {
        this.city = newBilling.City;
        this.country = newBilling.Country;
        this.county = newBilling.County;
        this.district = newBilling.District;
        this.fullName = newBilling.FullName;
        this.id = newBilling.Id;
        this.phoneNumber = newBilling.PhoneNumber;
        this.state = newBilling.State;
        this.streetAddress = newBilling.StreetAddress;
        this.user = new UserDbto(newBilling.User);
        this.zipCode = newBilling.ZipCode;
    }

}