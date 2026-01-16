package com.onlineshopappang.springshop.Services.ProductRelated;

import com.onlineshopappang.springshop.Models.ProductRelated.Favorite;
import com.onlineshopappang.springshop.Services.IRepository;
import com.onlineshopappang.springshop.Services.IService;
import jdk.jshell.spi.ExecutionControl;
import org.springframework.stereotype.Repository;

import java.util.UUID;
import java.util.function.Predicate;

@Repository
public class FavoriteRepository implements IRepository<Favorite> {

    @Override
    public void Create(Favorite entity) {

    }

    @Override
    public Iterable<Favorite> GetAll() {
        return null;
    }

    @Override
    public Favorite GetById(UUID entityId) {
        return null;
    }

    @Override
    public Iterable<Favorite> GetByFilter(Predicate<Favorite> filter) {
        return null;
    }

    @Override
    public void Update(Favorite entity) {

    }

    @Override
    public void Delete(UUID entityId) {

    }
}
