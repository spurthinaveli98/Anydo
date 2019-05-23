package com.SpringProject.Anydo.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "AnydoItem")
public class AnydoItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long itemId;

    @Column(unique = true, nullable = false)
    private String itemName;

    @Column(nullable = false)
    private String dayName;

    @Column
    private long listId;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "itemId", referencedColumnName = "itemId")
    private List<AnydoSubTask> anydoSubTask;

    public long getItemId() {
        return itemId;
    }

    public long getListId(){ return listId;}

    public void setListId(long listId){ this.listId = listId;}

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getDayName() {
        return dayName;
    }

    public void setDayName(String dayName) {
        this.dayName = dayName;
    }
}
