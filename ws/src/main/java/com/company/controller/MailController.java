package com.company.controller;

import com.company.mail.Mail;
import com.company.model.Contact;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/mail")
public class MailController {


    @RequestMapping(value = "/sendMail", method = RequestMethod.POST)
    public void sendMail(@RequestBody Contact contact) {
        Mail.Send(contact.getName(), contact.getSurname(), contact.getMail(), contact.getQuery());
    }


}
