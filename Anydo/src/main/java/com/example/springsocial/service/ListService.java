package com.example.springsocial.service;

import com.example.springsocial.dto.ListDTO;
import com.example.springsocial.exception.BadRequestException;
import com.example.springsocial.exception.NoSuchColumnException;
import com.example.springsocial.model.AnydoList;
import com.example.springsocial.model.User;
import com.example.springsocial.repository.ListRepository;
import com.example.springsocial.repository.UserRepository;
import com.example.springsocial.security.TokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class ListService {
    long globalId;

    @Autowired
    ListRepository listRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    TokenProvider tokenProvider;

    public List<AnydoList> getList(Long id) {
      List<AnydoList> anydoLists;
      anydoLists = listRepository.findListOfUser(id);
      if(anydoLists.size() == 0){
          throw new BadRequestException("List is Empty");
      }
        return anydoLists;
    }

    public AnydoList addList(ListDTO listDTO) {
      AnydoList anydoList = new AnydoList();

          String token = listDTO.getToken();
          globalId = tokenProvider.getUserIdFromToken(token);
          String name = listDTO.getListName();
          anydoList.setListName(name);
            User user = userRepository.getOneById(globalId);
            anydoList.setUserId(globalId);
         if(Objects.isNull(name) || Objects.isNull(globalId)){
             throw new NoSuchColumnException("No such Column name found in table"+globalId);
         }
        try {
          return listRepository.save(anydoList);
      }
      catch(Exception e){
          throw new BadRequestException("Already name exists");
      }
    }

    public List<AnydoList> deleteList(Long id) {
        try {
            listRepository.delete(listRepository.getOne(id));
            return  listRepository.findListOfUser(globalId);
        }
        catch(Exception e){
            throw new BadRequestException("list_Id:"+id + " "+"is not present in table");
        }
    }


    public AnydoList updateList(ListDTO listDTO, Long id) {
        AnydoList anydoList;
        try {
            anydoList = listRepository.getOne(id);
            String listName = listDTO.getListName();
            anydoList.setListName(listName);
            return listRepository.save(anydoList);
        }
        catch(Exception e){
            if(e.getMessage() == null)
                 throw new BadRequestException("Cannot modify name which do not exist");
            else
                throw new NoSuchColumnException("There is no such field in the table");
        }
    }
}
