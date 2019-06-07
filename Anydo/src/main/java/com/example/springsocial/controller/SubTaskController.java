package com.example.springsocial.controller;

import com.example.springsocial.dto.SubTaskDTO;
import com.example.springsocial.model.AnydoSubTask;
import com.example.springsocial.service.SubTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="*")
@RestController
public class SubTaskController {

    @Autowired

    SubTaskService subTaskService;

    @GetMapping(value = "/AnydoSubTask")
    public List<AnydoSubTask> getAllSubTasks() {
        List<AnydoSubTask> allInfo = subTaskService.getAllSubTasks();
        return allInfo;
    }

    @PostMapping(value = "/AnydoSubTask")
    public AnydoSubTask addSubTask(@RequestBody SubTaskDTO subTaskDTO) {
             AnydoSubTask anydoSubTask = subTaskService.addSubTask(subTaskDTO);
            return anydoSubTask;
    }

    @DeleteMapping(value = "/AnydoSubTask/{name}")
    public List<AnydoSubTask> deleteSubTask(@PathVariable String name) {
        return subTaskService.deleteSubTask(name);
    }

    @PutMapping(value = "/AnydoSubTask/{name}")
    public AnydoSubTask updateSubTask(@RequestBody SubTaskDTO subTaskDTO, @PathVariable String name) throws Exception {
            return subTaskService.updateSubTask(subTaskDTO, name);
    }

}
