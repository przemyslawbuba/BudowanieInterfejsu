package com.company.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.company.config.JwtToken;
import com.company.model.LoginUser;
import com.company.model.Token;
import com.company.model.User;
import com.company.service.UserService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/token")
public class AuthenticationController {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtToken jwtToken;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/generate-token", method = RequestMethod.POST)
    public ResponseEntity register(@RequestBody LoginUser loginUser) {
        final User user = userService.findOne(loginUser.getUsername());
        final String token;
        boolean encodeeee = passwordEncoder.matches(loginUser.getPassword(), user.getPassword());
        if (passwordEncoder.matches(loginUser.getPassword(), user.getPassword())){
            token = jwtToken.generateToken(user);
            return ResponseEntity.ok(Token.of(token));
        }else{
            token = null;
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }

    }

}
