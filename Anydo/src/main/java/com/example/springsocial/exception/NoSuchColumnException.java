package com.example.springsocial.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.logging.Logger;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class NoSuchColumnException extends RuntimeException {

    private static final Logger log = Logger.getLogger(BadRequestException.class.getName());
    public NoSuchColumnException(String msg)
    {
        super(msg);
        log.warning("No such column is present in table");
    }

}
