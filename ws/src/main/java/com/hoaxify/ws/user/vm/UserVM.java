package com.hoaxify.ws.user.vm;

import com.hoaxify.ws.user.User;

import lombok.Data;

@Data
public class UserVM {
	
	private String username;
	
	private String displayName;
	
	private byte[] image;
	
	public UserVM(User user) {
		this.setUsername(user.getUsername());
		this.setDisplayName(user.getUsername());
		this.setImage(user.getImage());
	}

}
