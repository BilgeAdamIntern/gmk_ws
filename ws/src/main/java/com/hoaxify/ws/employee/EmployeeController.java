package com.hoaxify.ws.employee;

import com.hoaxify.ws.employee.dto.SaveEmployeeDTO;
import com.hoaxify.ws.employee.vm.EmployeeUpdateVM;
import com.hoaxify.ws.employee.vm.EmployeeVM;
import com.hoaxify.ws.shared.CurrentUser;
import com.hoaxify.ws.shared.GenericResponse;
import com.hoaxify.ws.user.User;
import com.hoaxify.ws.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
public class EmployeeController {

    @Autowired
    CustomEmployeeDetailsService employeeService;

    @Autowired
    UserRepository userRepository;

    @PostMapping("/saveEmployee")
    public ResponseEntity<?> createEmployee(@Valid @RequestBody SaveEmployeeDTO dto) {
        try {
            Employee savedEmp = employeeService.save(dto.getEmployee());
            User user = dto.getUser();
            user.setEmployeeId(savedEmp);
            return ResponseEntity.ok().body("Kaydedildi.");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Kaydedilemedi! Lütfen verileri kontrol ediniz.");
        }
    }

    @GetMapping("/employee")
    Page<EmployeeVM> getEmployees(Pageable page, @CurrentUser Employee employee) {
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
