package com.SpringProject.Anydo.item;

import com.SpringProject.Anydo.model.AnydoItem;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping(value = "/AnydoSubTask")
    public AnydoSubTask addSubTask(@RequestBody JsonNode json)throws Exception {
        try{
             AnydoSubTask anydoSubTask = subTaskService.addSubTask(json);
            return anydoSubTask;
        }
        catch (NullPointerException e) {
            throw new NullPointerException("Incomplete Information");
        }
    }

}
