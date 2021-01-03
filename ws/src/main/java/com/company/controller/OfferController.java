package com.company.controller;

import com.company.model.Offer;
import com.company.model.Role;
import com.company.model.User;
import com.company.service.OfferService;
import com.company.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/offers")
public class OfferController {

    @Autowired
    private OfferService offerService;

    @Autowired
    private UserService userService;

//    @Autowired
//    private RoleService roleService;

    private User user;

    @GetMapping
    public List<Offer> listUser() {
        return offerService.findAll();
    }

    @RequestMapping(value = "/addOffer", method = RequestMethod.POST)
    public void addOffer(@RequestBody Offer offer) {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = "";
        if (principal instanceof UserDetails) {
            username = ((UserDetails) principal).getUsername();
        } else {
            username = principal.toString();
        }
        user = userService.findOne(username);
        List<Role> roleList = new ArrayList<>(user.getRoles());
        if (roleList.get(0).getRole().contains("ROLE_ADMIN")){
            offerService.addOffer(offer);
        }
    }


    @RequestMapping(value = "/delete/{id}", method = RequestMethod.POST)
    public void deletePost(@PathVariable Integer id) {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = "";
        if (principal instanceof UserDetails) {
             username = ((UserDetails) principal).getUsername();
        } else {
             username = principal.toString();
        }
        user = userService.findOne(username);
        List<Role> roleList = new ArrayList<>(user.getRoles());
        if (roleList.get(0).getRole().contains("ROLE_ADMIN")){
            offerService.deleteOffer(id);
        }
    }


}
