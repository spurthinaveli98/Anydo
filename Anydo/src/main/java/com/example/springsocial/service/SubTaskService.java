package com.example.springsocial.service;

import com.example.springsocial.dto.SubTaskDTO;
import com.example.springsocial.exception.BadRequestException;
import com.example.springsocial.exception.NoSuchColumnException;
import com.example.springsocial.model.AnydoSubTask;
import com.example.springsocial.repository.SubTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class SubTaskService {

    @Autowired
    SubTaskRepository subTaskRepository;

    public List<AnydoSubTask> getAllSubTasks() {
          List<AnydoSubTask> anydoSubTasks;
          anydoSubTasks = subTaskRepository.findAll();
          if(anydoSubTasks.size() == 0){
              throw new BadRequestException("SubTasks are Empty");
          }
        return subTaskRepository.findAll();
    }

    public AnydoSubTask addSubTask(SubTaskDTO subTaskDTO) {

        AnydoSubTask anydoSubTask;
            anydoSubTask = new AnydoSubTask();
            String name = subTaskDTO.getSubTaskName();
            if(Objects.isNull(name)){
                throw new NoSuchColumnException("No such field is present in table");
            }
            anydoSubTask.setSubTaskName(name);
            subTaskDTO.getItemId().ifPresent(itemId ->
                    anydoSubTask.setItemId(itemId)
            );
        try {
            return subTaskRepository.save(anydoSubTask);
        }
        catch (Exception e){
            throw new BadRequestException("All required fields are not present");
        }
    }

    public List<AnydoSubTask> deleteSubTask(String name) {
        try {
            subTaskRepository.delete(subTaskRepository.deleteOne(name));
            return subTaskRepository.findAll();
        }
        catch(Exception e){
            throw new BadRequestException("Cannot delete the content which does not exist");
        }
    }

    public AnydoSubTask updateSubTask(SubTaskDTO subTaskDTO, String name) {
        AnydoSubTask anydoSubTask;
        try {
            anydoSubTask = subTaskRepository.getOne(name);
            String subTaskName = subTaskDTO.getSubTaskName();
            anydoSubTask.setSubTaskName(subTaskName);
            return subTaskRepository.save(anydoSubTask);
        }
        catch (Exception e){
            if(e.getMessage() == null)
            throw new BadRequestException("Cannot modify the content which does not exist");
            else
            throw new NoSuchColumnException("No such column present in table");
        }
    }
}

