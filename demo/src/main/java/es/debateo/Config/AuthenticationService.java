package es.debateo.Config;
//package com.tericcabrel.authapi.services;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import es.debateo.Model.Users;
import es.debateo.Repositories.usersRepo;

@Service
public class AuthenticationService {
    private final usersRepo repo;
    
    private final PasswordEncoder passwordEncoder;
    
    private final AuthenticationManager authenticationManager;

    public AuthenticationService(
        usersRepo repo,
        AuthenticationManager authenticationManager,
        PasswordEncoder passwordEncoder
    ) {
        this.authenticationManager = authenticationManager;
        this.repo = repo;
        this.passwordEncoder = passwordEncoder;
    }

//    public Users signup(Users input) {
//        Users user = new Users()
//                .setUsername(input.getUsername())
//                .setMail(input.getMail())
//                .setPassword(passwordEncoder.encode(input.getPassword()));
//
//        return repo.save(user);
//    }

    //THIS WILL PROBABLY NEED TO BE MOVED TO USERSSERVICE
    public Users authenticate(Users input) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                	
                        input.getUsername(),
                        input.getPassword()
                )
        );

        return repo.findById(input.getUsername())
                .orElseThrow();
    }
}