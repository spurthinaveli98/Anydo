package com.example.springsocial.repository;

import com.example.springsocial.model.AnydoItem;
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

    @Query("SELECT i FROM  AnydoItem i WHERE i.itemName = :name")
     AnydoItem deleteOne(@Param("name") String name);
//
//    @Query("UPDATE AnydoItem i SET i.itemName = :name WHERE i.itemName = :name")
//    AnydoItem deleteOne(@Param("name") String name);

    @Query("SELECT i FROM  AnydoItem i WHERE i.itemName = :name")
    AnydoItem getOne(@Param("name") String name);

}

//    UPDATE tutorials_tbl
//   -> SET tutorial_title = 'Learning JAVA'
//           -> WHERE tutorial_id = 3;