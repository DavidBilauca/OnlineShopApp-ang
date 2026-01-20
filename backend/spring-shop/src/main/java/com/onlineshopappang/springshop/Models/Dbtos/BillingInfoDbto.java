package com.onlineshopappang.springshop.Models.Dbtos;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "BillingInfos")
public class BillingInfoDbto {
    @Id
    @Column(name = "Id", nullable = false)
    private UUID id;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "UserId", nullable = false)
    private UserDbto user;

    @Column(name = "sameAsShipping", nullable = false)
    private Boolean sameAsShipping;

    @Lob
    @Column(name = "FullName", nullable = false)
    private String fullName;

    @Lob
    @Column(name = "Country", nullable = false)
    private String country;

    @Lob
    @Column(name = "State")
    private String state;

    @Lob
    @Column(name = "County", nullable = false)
    private String county;

    @Lob
    @Column(name = "District")
    private String district;

    @Lob
    @Column(name = "City", nullable = false)
    private String city;

    @Lob
    @Column(name = "StreetAddress", nullable = false)
    private String streetAddress;

    @Lob
    @Column(name = "ZipCode", nullable = false)
    private String zipCode;

    @Lob
    @Column(name = "PhoneNumber", nullable = false)
    private String phoneNumber;


}