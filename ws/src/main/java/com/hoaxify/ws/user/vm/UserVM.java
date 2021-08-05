package com.hoaxify.ws.user.vm;

import com.hoaxify.ws.employee.Employee;
import com.hoaxify.ws.user.User;

import lombok.Data;

@Data
public class UserVM {
	
	private String username;
	private String displayName;
	private byte[] image;
	private String password;
	private Employee employeeId;
	
	public UserVM(User user) {
		this.setUsername(user.getUsername());
		this.setDisplayName(user.getUsername());
		this.setImage(user.getImage());
		this.setPassword(user.getPassword());
		this.setEmployeeId(user.getEmployeeId());
	}

}
