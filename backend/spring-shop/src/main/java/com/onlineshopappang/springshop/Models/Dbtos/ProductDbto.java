package com.onlineshopappang.springshop.Models.Dbtos;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.time.ZoneId;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "products")
public class ProductDbto {
    @Id
    @Column(name = "id", nullable = false)
    private UUID id;

    @Column(name = "created_timestamp", nullable = false)
    private OffsetDateTime createdTimestamp;
    public LocalDateTime getCreatedTimestamp(){
        var zonedTime = createdTimestamp.atZoneSameInstant(ZoneId.of("Europe/Athens"));
        return zonedTime.toLocalDateTime();
    }

    @Column(name = "title", nullable = false, length = 100)
    private String title;

    @Column(name = "stock", precision = 10, scale = 2)
    private BigDecimal stock;
    public Integer getStock(){
        //return Integer.parseInt(stock.toString());
        return Integer.parseInt(stock.toString().split("\\.")[0]);
    }

    @Column(name = "price", precision = 10, scale = 2)
    private BigDecimal price;
    public Float getPrice(){
        return Float.parseFloat(price.toString());
    }

    @Column(name = "description", length = 300)
    private String description;

    @Column(name = "rating", precision = 2, scale = 1)
    private BigDecimal rating;
    public Float getRating(){
        return Float.parseFloat(rating.toString());
    }

    @Column(name = "image_url", length = Integer.MAX_VALUE)
    private String imageUrl;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.SET_NULL)
    @JoinColumn(name = "category_id", nullable = false)
    private CategoryDbto category;


}