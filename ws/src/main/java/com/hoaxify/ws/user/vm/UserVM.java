package com.hoaxify.ws.user.vm;

import com.hoaxify.ws.auth.Role;
import com.hoaxify.ws.employee.Employee;
import com.hoaxify.ws.user.User;

import lombok.Data;

@Data
public class UserVM {
	
	private String username;
	private String displayName;
	private String password;
	private Employee employeeId;
	private Role user_role;
	
	public UserVM(User user) {
		this.setUsername(user.getUsername());
		this.setDisplayName(user.getUsername());
		this.setPassword(user.getPassword());
		this.setEmployeeId(user.getEmployeeId());
		this.setUser_role(user.getUser_role());
	}

}
