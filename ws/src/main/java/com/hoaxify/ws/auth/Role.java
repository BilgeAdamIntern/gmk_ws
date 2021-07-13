package com.hoaxify.ws.auth;

import javax.persistence.*;
import java.util.*;

@Entity
@Table(name = "roles", schema = "gmk_user")
public class Role {


    @Id
    @Column(name = "role_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "role_name", nullable = false, unique = true)
    private String role_name;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "role_grant_relation",
            schema = "gmk_user",
            joinColumns = @JoinColumn(name = "role_id"),
            inverseJoinColumns = @JoinColumn(name = "grant_id"))
    Set<Grant> hasAccess;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getRole_name() {
        return role_name;
    }

    public void setRole_name(String role_name) {
        this.role_name = role_name;
    }

    public Set<Grant> getHasAccess() {
        return hasAccess;
    }

    public void setHasAccess(Set<Grant> hasAccess) {
        this.hasAccess = hasAccess;
    }
}