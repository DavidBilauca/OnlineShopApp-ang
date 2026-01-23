package com.onlineshopappang.springshop.Models.Dbtos;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "products")
public class ProductDbto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private UUID id;

    public void setId(Long id) {
        this.id = UUID.fromString(id.toString());
    }

    @Column(name = "created_timestamp", nullable = false)
    private OffsetDateTime createdTimestamp;

    public LocalDateTime getCreatedTimestamp() {
        return LocalDateTime.parse(createdTimestamp.toString());
    }

    @Column(name = "title", nullable = false, length = 100)
    private String title;

    @Column(name = "stock", precision = 10, scale = 2)
    private BigDecimal stock;
    public Integer getStock(){
        //DecimalFormat decFormatter = new DecimalFormat();
        //decFormatter.setMaximumFractionDigits(1);
        Integer stockInt = Integer.parseInt(rating.toString()) ;
        return stockInt;
    }

    @Column(name = "price", precision = 10, scale = 2)
    private BigDecimal price;
    public float getPrice(){
        DecimalFormat decFormatter = new DecimalFormat();
        decFormatter.setMaximumFractionDigits(2);
        Float priceInFloat = Float.parseFloat(decFormatter.format(price)) ;
        return priceInFloat;
    }

    @Column(name = "description", length = 300)
    private String description;

    @Column(name = "rating", precision = 2, scale = 1)
    private BigDecimal rating;
    public float getRating(){
        DecimalFormat decFormatter = new DecimalFormat();
        decFormatter.setMaximumFractionDigits(1);
        Float ratingInFloat = Float.parseFloat(decFormatter.format(rating)) ;
        return ratingInFloat;
    }

    @Column(name = "image_url", length = Integer.MAX_VALUE)
    private String imageUrl;

    @Column(name = "category_id", nullable = false)
    private UUID categoryId;


}