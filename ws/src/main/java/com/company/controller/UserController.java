package com.company.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.company.model.User;
import com.company.service.UserService;

import javax.servlet.http.HttpServletRequest;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    private User user;

    @GetMapping
    public List<User> listUser() {
        return userService.findAll();
    }

    @GetMapping("/getUser")
    public User getUser(String username){
        return userService.findOne(username);
    }

    @RequestMapping(value = "/getRole/{username}", method = RequestMethod.GET)
    @ResponseBody
    public String getRole(@PathVariable String username) {
        user = userService.findOne(username);
        return user.getRole();
//        return "ROLE_ADMIN";
    }

}
