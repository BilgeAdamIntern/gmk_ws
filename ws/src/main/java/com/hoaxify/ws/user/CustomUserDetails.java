package com.hoaxify.ws.user;

import com.hoaxify.ws.auth.Grant;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;
import java.util.stream.Collectors;

public class CustomUserDetails implements UserDetails {

    private User userDetail;
    private String username;
    private String password;
    private boolean active;
    private List<GrantedAuthority> auths;

    public CustomUserDetails(User user){
        this.username = user.getUsername();
        this.password = user.getPassword();
        this.active = user.isActive();

        List<GrantedAuthority> grants = user.getUser_role().getHasAccess().stream().map(Grant::getGrant_name).map(SimpleGrantedAuthority::new).collect(Collectors.toList());
        for(GrantedAuthority s: grants){
            System.out.println(s.getAuthority());
        }
        this.auths = grants;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return auths;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return active;
    }
}
