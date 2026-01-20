package com.onlineshopappang.springshop.Models.Dbtos;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "DeliveryInfos")
public class DeliveryInfoDbto {
    @Id
    @Column(name = "Id", nullable = false)
    private UUID id;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "UserId", nullable = false)
    private UserDbto user;

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


}