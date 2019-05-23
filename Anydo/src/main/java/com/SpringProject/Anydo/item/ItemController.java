package com.SpringProject.Anydo.item;

import com.SpringProject.Anydo.model.AnydoItem;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins="*")
@RestController
public class ItemController {

    @Autowired
    ItemService itemService;

    @GetMapping("/api/items")
    public String hello() {
        return "Hello";
    }

    @GetMapping(value = "/AnydoItem/{id}")
    public AnydoItem getItems(@PathVariable Long id) throws Exception{
        AnydoItem info = itemService.getItem(id);
        try{
            //To check if items there or not.
            info.getItemId();
            return info;
        }
        catch(NullPointerException e){
            throw new NullPointerException("Items are not Found");
        }
    }

    @GetMapping(value = "/AnydoItem")
    public List<AnydoItem> getAllItems() throws Exception{
        List<AnydoItem> allInfo = itemService.getAllItems();
        if(allInfo.isEmpty())
            throw new NullPointerException("Items are Empty");
        return allInfo;
    }

    @PostMapping(value = "/AnydoItem")
    public AnydoItem addItem(@RequestBody JsonNode json)throws Exception {
        try{
           AnydoItem anydoItem = itemService.addItem(json);
           return anydoItem;
        }
        catch (NullPointerException e) {
            throw new NullPointerException("Incomplete Information");
        }
    }

}
