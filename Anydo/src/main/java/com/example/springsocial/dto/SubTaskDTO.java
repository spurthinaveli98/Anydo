package com.example.springsocial.dto;

import java.util.Optional;

public class SubTaskDTO {

    public void setSubTaskName(String subTaskName) {
        this.subTaskName = subTaskName;
    }

    public Long getSubTaskId() {
        return subTaskId;
    }

    public String getSubTaskName() {
        return subTaskName;
    }

    private Long subTaskId;

    private String subTaskName;

    private Long itemId;

    public void setItemId(Long itemId) {
        this.itemId = itemId;
    }

    public Optional<Long> getItemId() {
        return Optional.ofNullable(itemId);
    }
}
