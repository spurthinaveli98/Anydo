package com.SpringProject.Anydo.subTask;

import com.SpringProject.Anydo.model.AnydoSubTask;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="*")
@RestController
public class SubTaskController {

    @Autowired
    SubTaskService subTaskService;

    @GetMapping("/subTasks")
    public String hello() {
        return "Hello";
    }

    @GetMapping(value = "/AnydoSubTask")
    public List<AnydoSubTask> getAllSubTasks() throws Exception{
        List<AnydoSubTask> allInfo = subTaskService.getAllSubTasks();
        if(allInfo.isEmpty())
            throw new NullPointerException("sub tasks are Empty");
        return allInfo;
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
