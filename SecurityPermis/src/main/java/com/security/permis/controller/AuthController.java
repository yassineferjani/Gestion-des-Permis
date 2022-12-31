package com.security.permis.controller;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@CrossOrigin("*")
public class AuthController {
    private JwtEncoder jwtEncoder;
    private AuthenticationManager authenticationManager;


    public AuthController(JwtEncoder jwtEncoder,AuthenticationManager authenticationManager) {
        this.jwtEncoder = jwtEncoder;
        this.authenticationManager=authenticationManager;
    }


    @PostMapping("/token")
    public Map<String,String> jwtToken(String username, String password){
        Authentication authentication=authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(username,password)
        );
        Map<String,String> idToken= new HashMap<>();
        Instant instant = Instant.now();
        String role = authentication.getAuthorities().stream().map(auth->auth.getAuthority()).collect(Collectors.joining(" "));
        JwtClaimsSet jwtClaimsSet = JwtClaimsSet.builder()
                .subject(authentication.getName())
                .issuedAt(instant)
                .expiresAt(instant.plus(5, ChronoUnit.MINUTES))
                .issuer("security.module")
                .claim("scope",role)
                .build();
        String jwtAccessToken = jwtEncoder.encode(JwtEncoderParameters.from(jwtClaimsSet)).getTokenValue();
        idToken.put("accessToken",jwtAccessToken);
        return idToken;

    }
}
