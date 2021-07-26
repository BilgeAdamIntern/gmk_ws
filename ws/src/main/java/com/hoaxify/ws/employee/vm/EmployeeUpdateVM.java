package com.hoaxify.ws.employee.vm;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
public class EmployeeUpdateVM {
    @NotNull
    @Size(min = 4, max=255)
    private String firstName;
    private String secondName;
    private String phoneNumber;
    private String department;
    private String duty;
    private String id;
    private String age;
}
