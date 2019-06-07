package com.example.springsocial.repository;
import com.example.springsocial.model.AnydoSubTask;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubTaskRepository extends JpaRepository<AnydoSubTask, Long> {

    public List<AnydoSubTask> findAll();

    @Query("SELECT i FROM  AnydoSubTask i WHERE i.subTaskName = :name")
    AnydoSubTask deleteOne(@Param("name") String name);


    @Query("SELECT i FROM  AnydoSubTask i WHERE i.subTaskName = :name")
    AnydoSubTask getOne(@Param("name") String name);
}

