package com.onlineshopappang.springshop.Models.Dbtos;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "Products")
public class ProductDbto {
    @Id
    @Column(name = "Id", nullable = false)
    private UUID id;

    @Lob
    @Column(name = "CreatedTimestamp")
    private String createdTimestamp;

    @Column(name = "Title", nullable = false, length = 50)
    private String title;

    @Column(name = "Stock", nullable = false)
    private Integer stock;

    @Column(name = "Price")
    private Float price;

    @Column(name = "Description", length = 200)
    private String description;

    @Column(name = "Rating")
    private Float rating;

    @Lob
    @Column(name = "ImageURL")
    private String imageURL;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CategoryId")
    private CategoryDbto category;


}