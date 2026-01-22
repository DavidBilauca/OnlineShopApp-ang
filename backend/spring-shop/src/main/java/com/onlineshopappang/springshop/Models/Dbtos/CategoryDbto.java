package com.onlineshopappang.springshop.Models.Dbtos;

import com.onlineshopappang.springshop.Models.ProductRelated.Category;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "Categories")
public class CategoryDbto {
    @Id
    @Column(name = "Id", nullable = false)
    private UUID id;

    @Column(name = "Name", nullable = false, length = 50)
    private String name;

    public CategoryDbto(){}

    public CategoryDbto(Category category) {
        this.id = category.Id;
        this.name = category.Name;
    }
}