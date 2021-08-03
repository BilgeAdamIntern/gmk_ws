package com.hoaxify.ws.employee.dto;


import com.hoaxify.ws.employee.Employee;
import com.hoaxify.ws.user.User;
import lombok.Data;

@Data
public class SaveEmployeeDTO {
    private Employee employee;
    private User user;
}
