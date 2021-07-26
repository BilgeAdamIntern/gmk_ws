package com.hoaxify.ws.employee.vm;

import com.hoaxify.ws.employee.Employee;

import lombok.Data;

@Data
public class EmployeeVM {

    private String firstName;
    private String secondName;
    private String phoneNumber;
    private String department;
    private String duty;
    private String id;

    public EmployeeVM (Employee employee) {
        this.setFirstName(employee.getFirstName());
        this.setSecondName(employee.getSecondName());
        this.setPhoneNumber(employee.getPhoneNumber());
        this.setDepartment(employee.getDepartment());
        this.setDuty(employee.getDuty());
        this.setId(employee.getID());
    }

}
