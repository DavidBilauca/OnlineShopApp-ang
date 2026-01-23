package com.onlineshopappang.springshop.Models.Dbtos;

import com.onlineshopappang.springshop.Models.ProductRelated.Category;
import jakarta.annotation.sql.DataSourceDefinition;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "categories")
public class CategoryDbto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private UUID id;
    public void setId(Long id) {
        this.id = UUID.fromString(id.toString());
    }

    @Column(name = "name", nullable = false, length = 50)
    private String name;


    public CategoryDbto() {

    }

    public CategoryDbto(Category category) {
        this.id = category.Id;
        this.name = category.Name;
    }
}