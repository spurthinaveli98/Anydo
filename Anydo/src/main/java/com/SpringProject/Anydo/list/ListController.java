package com.SpringProject.Anydo.list;

import com.SpringProject.Anydo.model.AnydoList;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    public void addList(@RequestBody JsonNode json)throws Exception {
        try{
            listService.addList(json);
        }
        catch (NullPointerException e) {
            throw new NullPointerException("Incomplete Information");
        }
    }
}
