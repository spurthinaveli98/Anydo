package com.SpringProject.Anydo.list;

import com.SpringProject.Anydo.model.AnydoList;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ListService {

    @Autowired
    ListRepository listRepository;

    public List<AnydoList> getList() {

        return listRepository.findAll();
    }

    public AnydoList addList(JsonNode json) {
AnydoList anydoList = new AnydoList();

        String name = json.get("listName").asText();
        anydoList.setListName(name);

        return listRepository.save(anydoList);
    }
}