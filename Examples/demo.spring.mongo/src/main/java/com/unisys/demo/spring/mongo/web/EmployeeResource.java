package com.unisys.demo.spring.mongo.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.unisys.demo.spring.mongo.model.Employee;
import com.unisys.demo.spring.mongo.repo.EmployeeRepository;

@RestController
@RequestMapping("/rest/employees")
public class EmployeeResource {
	
	@Autowired
	EmployeeRepository repo;

	@RequestMapping(method=RequestMethod.GET, value="/{id}")
	public Employee getOneEmployee(@PathVariable String id) {
		return repo.findOne(id);
	}
	
	@RequestMapping(method=RequestMethod.GET)
	public List<Employee> getAllEmployees() {
		return repo.findAll();
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/gender/{gender}")
	public List<Employee> getAllEmployeesByGender(@PathVariable String gender) {
		return repo.findEmployeeByGender(gender);
	}
}
