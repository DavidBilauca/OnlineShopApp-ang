package com.onlineshopappang.springshop.Models.Dbtos;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.UUID;

@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "favorites")
public class FavoriteDbto {
    @Id
    @Column(name = "id", nullable = false)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "product_id", nullable = false)
    private ProductDbto product;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "user_id", nullable = false)
    private UserDbto user;


    public FavoriteDbto() {

    }
//    public FavoriteDbto(UUID productId, UUID userId) {
//        this.id = UUID.randomUUID();
//        this.
//    }
public FavoriteDbto(ProductDbto product, UserDbto user) {
        this.id = UUID.randomUUID();
        this.product = product;
        this.user = user;
    }
}