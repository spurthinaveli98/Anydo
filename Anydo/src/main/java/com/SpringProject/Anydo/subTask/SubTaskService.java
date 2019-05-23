package com.SpringProject.Anydo.subTask;

import com.SpringProject.Anydo.model.AnydoSubTask;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubTaskService {

    @Autowired
    SubTaskRepository subTaskRepository;

    public List<AnydoSubTask> getAllSubTasks() {

        return subTaskRepository.findAll();
    }

    public AnydoSubTask addSubTask(JsonNode json) {

        AnydoSubTask anydoSubTask = new AnydoSubTask();

        String name = json.get("subTaskName").asText();
        anydoSubTask.setSubTaskName(name);

        long itemId = json.get("itemId").asLong();
        anydoSubTask.setItemId(itemId);

        return subTaskRepository.save(anydoSubTask);
    }
}

