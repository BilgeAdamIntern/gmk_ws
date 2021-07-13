package com.hoaxify.ws.auth;

import javax.persistence.*;

import com.hoaxify.ws.user.User;

@Entity
@Table(name = "token", schema = "gmk_user")
public class Token {
	
	@Id
	@Column(name = "token_id")
	private String token;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
}
