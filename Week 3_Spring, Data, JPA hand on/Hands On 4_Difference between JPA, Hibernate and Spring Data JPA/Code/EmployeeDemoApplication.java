package com.example.employee_demo;

import com.example.employee_demo.model.Employee;
import com.example.employee_demo.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EmployeeDemoApplication implements CommandLineRunner {

	@Autowired
	private EmployeeRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(EmployeeDemoApplication.class, args);
	}

	@Override
	public void run(String... args) {
		Employee e = new Employee();
		e.setId(1);
		e.setName("Alice");
		e.setSalary(60000.0);
		repository.save(e);
		System.out.println("Inserted: " + repository.findById(1).orElse(null));
	}
}
