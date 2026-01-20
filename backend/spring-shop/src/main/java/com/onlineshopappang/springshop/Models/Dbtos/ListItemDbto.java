package com.onlineshopappang.springshop.Models.Dbtos;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "ListItems")
public class ListItemDbto {
    @Id
    @Column(name = "Id", nullable = false)
    private UUID id;

    @Column(name = "ListId", nullable = false)
    private UUID listId;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "ProductId", nullable = false)
    private ProductDbto product;

    @Column(name = "Quantity", nullable = false)
    private Integer quantity;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "OrderId")
    private OrderDbto order;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "UserId")
    private UserDbto user;


}