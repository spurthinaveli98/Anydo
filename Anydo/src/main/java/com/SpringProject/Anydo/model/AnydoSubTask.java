package com.SpringProject.Anydo.model;

import javax.persistence.*;

@Entity
@Table(name = "AnydoSubTask")
public class AnydoSubTask {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long subTaskId;

    @Column(unique = true, nullable = false)
    private String subTaskName;

    @Column
    private long itemId;

    public long getSubTaskId() {
        return subTaskId;
    }

    public String getSubTaskName() {
        return subTaskName;
    }

    public void setSubTaskName(String subTaskName) {
        this.subTaskName = subTaskName;
    }

    public long getItemId(){ return itemId;}

    public void setItemId(long itemId){ this.itemId = itemId;}

}
