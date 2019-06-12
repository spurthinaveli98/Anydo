package com.example.springsocial.repository;

import com.example.springsocial.model.AnydoList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ListRepository extends JpaRepository<AnydoList,Long> {

    @Query("SELECT i FROM  AnydoList i WHERE i.userId = :id")
    List<AnydoList> findListOfUser(@Param("id") Long id);

    public AnydoList getOne(Long id);
}