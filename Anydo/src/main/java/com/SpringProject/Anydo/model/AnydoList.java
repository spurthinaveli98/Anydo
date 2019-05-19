package com.SpringProject.Anydo.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "AnydoList")
public class AnydoList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long listId;

    @Column(unique = true, nullable = false)
    private String listName;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "listId", referencedColumnName = "listId")
    private List<AnydoItem> anydoItem;

    public long getListId() { return listId; }

    public String getListName() {
        return listName;
    }

    public void setListName(String listName) {
        this.listName = listName;
    }

}
