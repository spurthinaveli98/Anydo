package com.SpringProject.Anydo.subTask;

import com.SpringProject.Anydo.model.AnydoSubTask;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
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

    @DeleteMapping(value = "/AnydoSubTask/{name}")
    public List<AnydoSubTask> deleteSubTask(@PathVariable String name) throws Exception  {
        try {
            return subTaskService.deleteSubTask(name);
        }
        catch (NullPointerException e) {
            throw new NullPointerException("No such subTask exist");
        }
    }

    @PutMapping(value = "/AnydoSubTask/{name}")
    public AnydoSubTask updateSubTask(@RequestBody JsonNode json, @PathVariable String name) throws Exception {
        try {
            return subTaskService.updateSubTask(json, name);
        }
        catch(EntityNotFoundException e){
            throw new EntityNotFoundException("SubTask with name:"+"{"+name+"}"+" "+"does not exist");
        }
        catch(NullPointerException e){
            throw new NullPointerException("No such field is present in table");
        }
    }

}
