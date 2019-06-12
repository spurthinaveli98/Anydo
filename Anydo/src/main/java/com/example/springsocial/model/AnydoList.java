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

    @Column
    private long userId;

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public long getListId() { return listId; }

    public String getListName() {
        return listName;
    }

    public void setListName(String listName) {
        this.listName = listName;
    }

}


//    @OneToOne(fetch = FetchType.LAZY, optional = false)
//    @JoinColumn(name = "id", nullable = false)
//    private User user;
//
//    @OneToOne(mappedBy = "anydoList")
//    private User user;

//    private Long userId;

//    @Column
//    private Long userId;
//
//    public Long getId() {
//        return userId;
//    }
//
//    public void setId(Long id) {
//        this.userId = userId;
//    }
//    @ManyToOne(cascade = CascadeType.ALL)
//    @JoinColumn(unique = true)
//    private User user;

//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }