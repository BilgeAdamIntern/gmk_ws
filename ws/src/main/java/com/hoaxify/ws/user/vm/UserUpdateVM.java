package com.hoaxify.ws.user.vm;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
public class UserUpdateVM {
	
	@NotNull
	@Size(min = 4, max=255)
	private String username;
	private String password;
	private boolean active;
	private String image;

}
