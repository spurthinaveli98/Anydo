package com.example.springsocial.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "AnydoList")
public class AnydoList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long listId;

    @Column( nullable = false)
    private String listName;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "listId", referencedColumnName = "listId")
    private List<AnydoItem> anydoItem;

//    @OneToOne(fetch = FetchType.LAZY, optional = false)
//    @JoinColumn(name = "id", nullable = false)
//    private User user;

    @Column
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public long getListId() { return listId; }

    public String getListName() {
        return listName;
    }

    public void setListName(String listName) {
        this.listName = listName;
    }


}
