package com.example.springsocial.controller;

import com.example.springsocial.dto.ListDTO;
import com.example.springsocial.model.AnydoList;
import com.example.springsocial.security.TokenProvider;
import com.example.springsocial.service.ListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="*")
@RestController
public class ListController {

    @Autowired
    ListService listService;

    @Autowired
    TokenProvider tokenProvider;

    @GetMapping(value = "/AnydoList/{token}")
    public List<AnydoList> getList(@PathVariable String token)  {
        long id = tokenProvider.getUserIdFromToken(token);
        List<AnydoList> allInfo = listService.getList(id);
        return allInfo;
    }

    @PostMapping(value = "/AnydoList")
    public AnydoList addList(@RequestBody ListDTO listDTO) {
        AnydoList anydoList = listService.addList(listDTO);
        return anydoList;
    }

    @DeleteMapping(value = "/AnydoList/{id}")
    public List<AnydoList> deleteList(@PathVariable Long id) {
        return listService.deleteList(id);
    }

    @PutMapping(value = "/AnydoList/{id}")
    public AnydoList updateList(@RequestBody ListDTO listDTO, @PathVariable Long id) {
        return listService.updateList(listDTO, id);
    }
}
