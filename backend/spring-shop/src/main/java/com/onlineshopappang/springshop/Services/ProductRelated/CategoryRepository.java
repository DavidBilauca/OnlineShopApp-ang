package com.onlineshopappang.springshop.Services.ProductRelated;

import com.onlineshopappang.springshop.Models.MockData;
import com.onlineshopappang.springshop.Models.ProductRelated.Category;
import com.onlineshopappang.springshop.Services.IRepository;
import org.springframework.stereotype.Repository;

import java.util.Arrays;
import java.util.UUID;
import java.util.function.Predicate;

@Repository
public class CategoryRepository implements IRepository<Category> {
    @Override
    public void Create(Category entity) {

    }

    @Override
    public Iterable<Category> GetAll() {
        return Arrays.asList(MockData.MockCategories);
    }

    @Override
    public Category GetById(UUID entityId) {
        return null;
    }

    @Override
    public Iterable<Category> GetByFilter(Predicate<Category> filter) {
        return null;
    }

    @Override
    public void Update(Category entity) {

    }

    @Override
    public void Delete(UUID entityId) {

    }
}
