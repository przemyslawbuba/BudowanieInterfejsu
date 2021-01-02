package com.company.controller;

import com.company.mail.Mail;
import com.company.model.Contact;
import com.company.model.Offer;
import com.company.model.User;
import com.company.service.OfferService;
import com.company.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/offers")
public class OfferController {

    @Autowired
    private OfferService offerService;

    @Autowired
    private UserService userService;

    private User user;

    @GetMapping
    public List<Offer> listUser() {
        return offerService.findAll();
    }

    @RequestMapping(value = "/addOffer", method = RequestMethod.POST)
    public void addOffer(@RequestBody Offer offer) {
        offerService.addOffer(offer);
    }

//    @DeleteMapping(value = "/delete/{id}")
    @RequestMapping(value = "/delete/{id}", method = RequestMethod.POST)
    public void deletePost(@PathVariable Integer id) {
        offerService.deleteOffer(id);

    }

}
