package com.onlineshopappang.springshop.Models.Dbtos;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.cglib.core.Local;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.UUID;

@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "products", indexes = {@Index(name = "products_pkey",
        columnList = "id",
        unique = true)})
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

    @Column(name = "category_id", nullable = false)
    private UUID categoryId;

    public ProductDbto() {

    }


}