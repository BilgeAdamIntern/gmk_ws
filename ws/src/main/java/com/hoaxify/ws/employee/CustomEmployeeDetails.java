package com.hoaxify.ws.employee;
import com.hoaxify.ws.auth.Grant;
import com.hoaxify.ws.user.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.employeedetails.EmployeeDetails;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;


public class CustomEmployeeDetails implements EmployeeDetails {


    private Employee employeeDetail;
    private String firstName;
    private String secondName;
    private String department;
    private String duty;
    private String age;
    private String id;
    private String phoneNumeber;

    public CustomEmployeeDetails(Employee employee){
        this.firstName = employee.getFirstName();
        this.secondName = employee.getSecondName();
        this.department = employee.getDepartment();
        this.duty = employee.getDuty();
        this.age = employee.getAge();
        this.id = employee.getTcno();
        this.phoneNumeber = employee.getPhoneNumber();
    }


    @Override
    public String getFirstName() { return  firstName;}
    @Override
    public String getSecondName() { return secondName;}
    @Override
    public String getDepartment() { return  department;}
    @Override
    public String getDuty() { return duty;}
    @Override
    public String getAge() { return age;}
    @Override
    public String getId() { return id;}
    @Override
    public String getPhoneNumeber() { return phoneNumeber;}


}
