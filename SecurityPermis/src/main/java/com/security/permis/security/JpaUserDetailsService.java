package com.security.permis.security;

import com.security.permis.dao.UserDao;
import com.security.permis.models.AppUser;
import org.springframework.security.authentication.jaas.AuthorityGranter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


public class JpaUserDetailsService implements UserDetailsService {
    private final UserDao userRepository;

    public JpaUserDetailsService(UserDao userRepository) {
        this.userRepository = userRepository;
    }
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AppUser user = userRepository.findByUsername(username);
        List<GrantedAuthority> autorities = user.getRole().stream()
                .map(r -> new SimpleGrantedAuthority(r.getRole())).collect(Collectors.toList());
        return new User(user.getUsername(),user.getPasswd(),autorities);
    }
}
