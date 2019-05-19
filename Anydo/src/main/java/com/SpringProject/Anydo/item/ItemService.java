package com.SpringProject.Anydo.item;

import com.SpringProject.Anydo.model.AnydoItem;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemService {

    @Autowired
    ItemRepository itemRepository;


    public AnydoItem getItem(Long id){
        return itemRepository.getItem(id);
    }


    public AnydoItem addItem(JsonNode json) {

        AnydoItem anydoItem = new AnydoItem();

        String name = json.get("itemName").asText();
        anydoItem.setItemName(name);

        String day = json.get("dayName").asText();
        anydoItem.setDayName(day);

        long listId = json.get("listId").asLong();
        anydoItem.setListId(listId);

        return itemRepository.save(anydoItem);
    }
}

