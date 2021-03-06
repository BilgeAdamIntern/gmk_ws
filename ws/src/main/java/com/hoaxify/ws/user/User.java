package com.hoaxify.ws.user;

import com.hoaxify.ws.auth.Role;

import javax.persistence.*;

@Entity
@Table(name = "users", schema = "gmk_user")
public class User {

	@Id
	@Column(name="user_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "username", nullable = false, unique = true)
	private String username;

	@Column(name = "password", nullable = false)
	private String password;

	@Column(name = "image")
	private byte[] image;

	@ManyToOne
	@JoinColumn(name= "user_role", nullable = false)
	private Role user_role;

	@Column(name = "active", nullable = false)
	private boolean active;

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

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}
}
