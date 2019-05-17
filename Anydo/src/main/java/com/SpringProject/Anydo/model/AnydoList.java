package com.SpringProject.Anydo.model;

import javax.persistence.*;

@Entity
@Table(name = "AnydoList")
public class AnydoList {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long listId;

    @Column(unique = true,nullable = false)
    private String listName;

    public long getListId() {
        return listId;
    }

    public String getListName() {
        return listName;
    }

    public void setListName(String listName) {
        this.listName = listName;
    }
}
