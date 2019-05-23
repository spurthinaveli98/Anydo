package com.SpringProject.Anydo.item;

import com.SpringProject.Anydo.model.AnydoItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<AnydoItem, Long> {

    public List<AnydoItem> findAll();

    @Query("SELECT i FROM  AnydoItem i WHERE i.itemId = :id")
     AnydoItem getItem(@Param("id") Long id);

}

