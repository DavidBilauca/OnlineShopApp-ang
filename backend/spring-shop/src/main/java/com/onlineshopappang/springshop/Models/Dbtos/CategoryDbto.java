package com.onlineshopappang.springshop.Models.Dbtos;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "categories", indexes = {@Index(name = "Categories_pkey",
        columnList = "id",
        unique = true)})
public class CategoryDbto {
    @Id
    @Column(name = "id", nullable = false)
    private UUID id;

    @Column(name = "name", nullable = false, length = 50)
    private String name;


}