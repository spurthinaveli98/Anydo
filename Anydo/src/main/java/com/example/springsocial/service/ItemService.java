package com.example.springsocial.service;

import com.example.springsocial.dto.ItemDTO;
import com.example.springsocial.exception.BadRequestException;
import com.example.springsocial.exception.NoSuchColumnException;
import com.example.springsocial.model.AnydoItem;
import com.example.springsocial.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class ItemService {

    @Autowired
    ItemRepository itemRepository;


    public AnydoItem getItem(Long id) {
        AnydoItem anydoItem;
        try {
            anydoItem = itemRepository.getItem(id);
            anydoItem.getItemName();
        }
        catch (Exception e) {
            throw new BadRequestException("item_Id:" + id + " " + "is not present in table");
        }

        return anydoItem;
    }

    public List<AnydoItem> getAllItems() {
        List<AnydoItem> anydoItems;
            anydoItems = itemRepository.findAll();
            if(anydoItems.size() == 0)
            {
             throw new BadRequestException("Items are not present in the table");
         }
        return anydoItems;
    }

    public AnydoItem addItem(ItemDTO itemDTO) {

        AnydoItem anydoItem = new AnydoItem();
        String name;
                name = itemDTO.getItemName();
                anydoItem.setItemName(name);

                if(Objects.isNull(name)) {
                    throw new NoSuchColumnException("No such Column Name found in table");
                }

            itemDTO.getDayName().ifPresent(dayName ->
                    anydoItem.setDayName(dayName)
            );

            itemDTO.getListId().ifPresent(listId ->
                    anydoItem.setListId(listId)
            );

        try {
            return itemRepository.save(anydoItem);
        }
        catch ( Exception e){
            throw new BadRequestException("Already given name exists");
        }
    }

    public List<AnydoItem> deleteItem(String name) {
        try {
            itemRepository.delete(itemRepository.deleteOne(name));
            return itemRepository.findAll();
        }
        catch (Exception e){
            throw new BadRequestException("item_Name:"+name + " "+"is not present in table");
        }
    }

    public AnydoItem updateItem(ItemDTO itemDTO, String name) {

        AnydoItem anydoItem;
            try {
                anydoItem = itemRepository.getOne(name);
                String itemName = itemDTO.getItemName();
                anydoItem.setItemName(itemName);
                return itemRepository.save(anydoItem);
            }
           catch(Exception e) {
                if(e.getMessage() == null)
               throw new BadRequestException("Cannot modify name which do not exist");
                else
                    throw new NoSuchColumnException("There is no such field in the table");
           }
    }
}


//        if(itemDTO.getDayName().isPresent()) {
//            String day = itemDTO.getDayName().get();
//            anydoItem.setDayName(day);
//        }
