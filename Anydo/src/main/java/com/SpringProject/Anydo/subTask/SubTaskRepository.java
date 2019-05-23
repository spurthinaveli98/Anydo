package com.SpringProject.Anydo.subTask;

import com.SpringProject.Anydo.model.AnydoSubTask;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubTaskRepository extends JpaRepository<AnydoSubTask, Long> {

    public List<AnydoSubTask> findAll();

}

