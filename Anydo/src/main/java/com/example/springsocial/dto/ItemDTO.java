package com.example.springsocial.dto;

import java.util.Optional;

public class ItemDTO {

    private String itemName;

    private String dayName;

    private Long listId;

    public void setItemName(String itemName) {

        this.itemName = itemName;
    }

    public void setDayName(String dayName) {
        this.dayName = dayName;
    }

    public void setList_id(Long listId) {
        this.listId = listId;
    }

    public String getItemName() {
        return itemName;
    }

    public Optional<String> getDayName() {
        return Optional.ofNullable(dayName);
    }

    public Optional<Long> getListId() {
        return Optional.ofNullable(listId);
    }
}
