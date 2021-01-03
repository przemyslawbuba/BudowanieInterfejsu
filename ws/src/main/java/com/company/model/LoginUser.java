package com.company.model;

import lombok.Getter;

import javax.persistence.FetchType;
import javax.persistence.ManyToMany;
import java.util.HashSet;
import java.util.Set;

@Getter
public class LoginUser {

    private String username;
    private String password;
    @ManyToMany(fetch = FetchType.EAGER)
    private Set<Role> appUserRole = new HashSet<Role>(0);

}
