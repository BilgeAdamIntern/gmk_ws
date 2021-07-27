package com.hoaxify.ws.employee;

import com.hoaxify.ws.error.NotFoundException;
import com.hoaxify.ws.employee.CustomEmployeeDetails;
import com.hoaxify.ws.employee.vm.EmployeeUpdateVM;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class CustomEmployeeDetailsService implements EmployeeDetailsService {

    EmployeeRepository employeeRepository;
    public CustomEmployeeDetailsService(EmployeeRepository employeeRepository) {this.employeeRepository = employeeRepository;}

    public void save(Employee employee) {
        employeeRepository.save(employee);
    }

    public Page<Employee> getEmployee(Pageable page, Employee employee) {
        if(employee != null) {
            return employeeRepository.findByfirstNameNot(employee.getFirstName(), page);
        }
        return employeeRepository.findAll(page);
    }

    @Override
    public EmployeeDetails loadEmployeeByfirstName(String firstName) throws UsernameNotFoundException {
        Optional<Employee> employee= Optional.ofNullable(employeeRepository.findByfirstName(firstName));
        employee.orElseThrow(() -> new UsernameNotFoundException("Not found"));
        EmployeeDetails details = employee.map(CustomEmployeeDetails::new).get();
        return (EmployeeDetails) details;
    }

    public Employee getByfirstName(String firstName) {
        Employee inDB = employeeRepository.findByfirstName(firstName);
        if(inDB == null) {
            throw new NotFoundException();
        }
        return inDB;
    }

    public Employee updateEmployee(String firstName, EmployeeUpdateVM employeeUpdateVM) {
        Employee inDB = getByfirstName(firstName);
        inDB.setFirstName(employeeUpdateVM.getFirstName());
        return employeeRepository.save(inDB);
    }

    public void deleteEmployee(String firstName) {
        Employee inDB = employeeRepository.findByfirstName(firstName);
        employeeRepository.delete(inDB);
    }

}
