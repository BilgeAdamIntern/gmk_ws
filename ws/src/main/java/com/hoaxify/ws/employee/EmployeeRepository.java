package com.hoaxify.ws.employee;

import com.hoaxify.ws.user.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface EmployeeRepository extends JpaRepository <Employee, Long>{


    Employee findByfirstName(String firstName);

    Page<Employee> findByfirstNameNot(String firstName, Pageable page);
}
