package com.SpringProject.Anydo.list;

import com.SpringProject.Anydo.model.AnydoList;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@CrossOrigin(origins="*")
@RestController
public class ListController {

    @Autowired
    ListService listService;

    @GetMapping("/api/hello")
    public String hello() {
        return "Hello";
    }

    @GetMapping(value = "/AnydoList")
    public List<AnydoList> getList() throws Exception{
        List<AnydoList> allInfo = listService.getList();
        if(allInfo.isEmpty())
            throw new NullPointerException("List is Empty");
        return allInfo;
    }

    @PostMapping(value = "/AnydoList")
    public AnydoList addList(@RequestBody JsonNode json)throws Exception {
        try{
           AnydoList anydoList = listService.addList(json);
           return anydoList;
        }
        catch (NullPointerException e) {
            throw new NullPointerException("Incomplete Information");
        }
    }

    @DeleteMapping(value = "/AnydoList/{id}")
    public List<AnydoList> deleteList(@PathVariable Long id) throws Exception  {
        try {
           return listService.deleteList(id);
        }
        catch (NullPointerException e) {
            throw new NullPointerException("No such List exist");
        }
    }

    @PutMapping(value = "/AnydoList/{id}")
    public AnydoList updateList(@RequestBody JsonNode json, @PathVariable Long id) throws Exception {
        try {
             return listService.updateList(json, id);
        }
        catch(EntityNotFoundException e){
            throw new EntityNotFoundException("List with id:"+"{"+id+"}"+" "+"does not exist");
        }
        catch(NullPointerException e){
            throw new NullPointerException("No such field is present in table");
        }
    }
}
