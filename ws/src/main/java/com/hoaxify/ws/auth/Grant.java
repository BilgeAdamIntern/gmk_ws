package com.hoaxify.ws.auth;

import javax.persistence.*;
import java.util.*;

@Entity
@Table(name = "grants", schema = "gmk_user")
public class Grant {

    @Id
    @Column(name = "grant_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "grant_name", nullable = false, unique = true)
    private String grant_name;

    @ManyToMany(mappedBy = "hasAccess", fetch = FetchType.LAZY)
    Set<Role> canDo;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getGrant_name() {
        return grant_name;
    }

    public void setGrant_name(String grant_name) {
        this.grant_name = grant_name;
    }

    public Set<Role> getCanDo() {
        return canDo;
    }

    public void setCanDo(Set<Role> canDo) {
        this.canDo = canDo;
    }
}
