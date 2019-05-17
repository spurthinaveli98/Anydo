package com.SpringProject.Anydo;

import com.SpringProject.Anydo.model.AnydoList;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@CrossOrigin(origins="*")
@RestController
public class AnydoController {

    @Autowired
    AnydoService anydoService;

    @GetMapping("/api/hello")
    public String hello() {
        return "Hello";
    }

    @GetMapping(value = "/AnydoList")
    public List<AnydoList> getList() throws Exception{
        List<AnydoList> allInfo = anydoService.getList();
        if(allInfo.isEmpty())
            throw new NullPointerException("No Employees in the List");
        return allInfo;
    }

    @PostMapping(value = "/AnydoList")
    public void addList(@RequestBody JsonNode json)throws Exception {
        try{
            anydoService.addList(json);
        }
        catch (NullPointerException e) {
            throw new NullPointerException("Incomplete Information");
        }
    }
}
