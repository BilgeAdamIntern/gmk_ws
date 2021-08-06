package com.hoaxify.ws.user;

import com.hoaxify.ws.auth.Role;
import com.hoaxify.ws.employee.Employee;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "users", schema = "gmk_user")
public class User {

    private static final long serialVersionUID = -3283182593565594093L;

    @Id
    @Column(name = "user_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "username", nullable = false, unique = true)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;

    @ManyToOne
    @JoinColumn(name = "user_role", nullable = true)
    private Role user_role;

    @Column(name = "active", nullable = true)
    private boolean active;

    @OneToOne
    @JoinColumn(name = "emp_id", nullable = false)
    private Employee employeeId;

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getUser_role() {
        return user_role;
    }

    public void setUser_role(Role user_role) {
        this.user_role = user_role;
    }

}
