package com.onlineshopappang.springshop.Models.Dbtos;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "Orders")
public class OrderDbto {
    @Id
    @Column(name = "Id", nullable = false)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "UserId")
    private UserDbto user;

    @Column(name = "OrderDate", nullable = false)
    private Instant orderDate;

    @Column(name = "Status", nullable = false)
    private Integer status;

    @Lob
    @Column(name = "UserEmail", nullable = false)
    private String userEmail;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "BillingInfoId", nullable = false)
    private BillingInfoDbto billingInfoDbto;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "DeliveryInfoId")
    private DeliveryInfoDbto deliveryInfo;


}