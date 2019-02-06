package com.unisys.demo.spring.mongo.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.unisys.demo.spring.mongo.model.Employee;

public interface EmployeeRepository extends MongoRepository<Employee, String> {

	// @Query("{gender : ?0}")
	public List<Employee> findEmployeeByGender(String gender);
	
}
