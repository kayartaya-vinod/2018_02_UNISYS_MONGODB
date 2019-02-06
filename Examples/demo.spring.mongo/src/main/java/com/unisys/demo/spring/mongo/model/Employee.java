package com.unisys.demo.spring.mongo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Document(collection = "emps")
public class Employee {
	@Id
	private String id;
	private String name;
	private String email;
	private String gender;
	private Double salary;
	private String city;
}
