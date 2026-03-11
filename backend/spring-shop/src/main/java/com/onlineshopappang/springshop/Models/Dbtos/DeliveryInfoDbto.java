package com.onlineshopappang.springshop.Models.Dbtos;

import com.onlineshopappang.springshop.Models.UserRelated.DeliveryInfo;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "delivery_info")
public class DeliveryInfoDbto {
    @Id
    @Column(name = "id", nullable = false)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "user_id", nullable = false)
    private UserDbto user;

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

    public DeliveryInfoDbto(DeliveryInfo newDelivery) {
        this.city = newDelivery.City;
        this.country = newDelivery.Country;
        this.county = newDelivery.County;
        this.district = newDelivery.District;
        this.id = newDelivery.Id;
        this.state = newDelivery.State;
        this.streetAddress = newDelivery.StreetAddress;
        this.user = new UserDbto(newDelivery.User);
        this.zipCode = newDelivery.ZipCode;
    }

    public DeliveryInfoDbto() {

    }
}