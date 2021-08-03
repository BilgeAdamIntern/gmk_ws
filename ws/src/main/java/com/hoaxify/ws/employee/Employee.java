package com.hoaxify.ws.employee;

import com.hoaxify.ws.user.User;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name = "employee_details", schema = "gmk_user")
public class Employee implements Serializable {

    @Id
    @Column(name = "emp_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long empID;
    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "second_name", nullable = false)
    private String secondName;

    @Column(name="phone_number", nullable = false, unique = true)
    private String phoneNumber;

    @Column(name="department", nullable = false)
    private String department;

    @Column(name="duty", nullable = false)
    private String duty;

    @Column(name="age", nullable = false)
    private String age;

    @Column(name="tcno", nullable = false, unique = true)
    private String tcno;

    public long getEmpID() {
        return empID;
    }

    /*public void setEmpID(long empID) {
        this.empID = empID;
    }*/

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getSecondName() {
        return secondName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }

    public String getDuty() {
        return duty;
    }

    public void setDuty(String duty) {
        this.duty = duty;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getTcno() {
        return tcno;
    }

    public void setTcno(String tcno) {
        this.tcno = tcno;
    }

}
