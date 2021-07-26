package com.hoaxify.ws.employee;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public interface EmployeeDetailsService {
    EmployeeDetails loadEmployeeByfirstName(String var1) throws UsernameNotFoundException;
}
