package com.hoaxify.ws.employee;
import javax.validation.Valid;

import com.hoaxify.ws.user.CustomUserDetailsService;
import com.hoaxify.ws.user.User;
import com.hoaxify.ws.user.vm.UserUpdateVM;
import com.hoaxify.ws.user.vm.UserVM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hoaxify.ws.shared.CurrentUser;
import com.hoaxify.ws.shared.GenericResponse;
import com.hoaxify.ws.employee.vm.EmployeeUpdateVM;
import com.hoaxify.ws.employee.vm.EmployeeVM;

@RestController
@RequestMapping("/api")
public class EmployeeController {

    @Autowired
    CustomEmployeeDetailsService employeeService;

    @PostMapping("/employees")
    public GenericResponse createUser(@Valid @RequestBody Employee employee) {
        employeeService.save(employee);
        return new GenericResponse("employee created");
    }

    @GetMapping("/employee")
    Page<EmployeeVM> getEmployees(Pageable page, @CurrentUser Employee employee){
        return employeeService.getEmployee(page, employee).map(EmployeeVM::new);
    }

    @GetMapping("/employees/{firstName}")
    EmployeeVM getEmployee(@PathVariable String firstName) {
        Employee employee = employeeService.getByfirstName(firstName);
        return new EmployeeVM(employee);
    }

    @PutMapping("/employees/{firstName}")
    @PreAuthorize("#firstName == principal.firstName")
    EmployeeVM updateEmployees(@Valid @RequestBody EmployeeUpdateVM updateEmployees, @PathVariable String firstName) {
        Employee employee = employeeService.updateEmployee(firstName, updateEmployees);
        return new EmployeeVM(employee);
    }

    @DeleteMapping("/employees/{firstName}")
    @PreAuthorize("#firstName == principal.firstName")
    GenericResponse deleteEmployee(@PathVariable String firstName) {
        employeeService.deleteEmployee(firstName);
        return new GenericResponse("employee is removed");
    }

}
