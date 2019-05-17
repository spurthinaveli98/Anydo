package com.SpringProject.Anydo;

import com.SpringProject.Anydo.model.AnydoList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnydoRepository extends JpaRepository<AnydoList,Long> {
    public List<AnydoList> findAll();

    public AnydoList getOne(Long id);
}