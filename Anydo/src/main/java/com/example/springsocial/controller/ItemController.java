package com.example.springsocial.controller;

import com.example.springsocial.dto.ItemDTO;
import com.example.springsocial.model.AnydoItem;
import com.example.springsocial.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="*")
@RestController
public class ItemController {

    @Autowired
    ItemService itemService;

    @GetMapping(value = "/AnydoItem/{id}")
    public AnydoItem getItems(@PathVariable Long id){
        AnydoItem info = itemService.getItem(id);
            return info;
    }

    @GetMapping(value = "/AnydoItem")
    public List<AnydoItem> getAllItems(){
        List<AnydoItem> allInfo = itemService.getAllItems();
        return allInfo;
    }

    @PostMapping(value = "/AnydoItem")
    public AnydoItem addItem(@RequestBody ItemDTO itemDTO){
        AnydoItem anydoItem = itemService.addItem(itemDTO);
           return anydoItem;
    }

    @DeleteMapping(value = "/AnydoItem/{name}")
    public List<AnydoItem> deleteItem(@PathVariable String name)  {
        List<AnydoItem> result = itemService.deleteItem(name);
             return result ;
    }

    @PutMapping(value = "/AnydoItem/{name}")
    public AnydoItem updateItem(@RequestBody ItemDTO itemDTO, @PathVariable String name){
     AnydoItem anydoItem = itemService.updateItem(itemDTO,name);
     return anydoItem;
    }

}
