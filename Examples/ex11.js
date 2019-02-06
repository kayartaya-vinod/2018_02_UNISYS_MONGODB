// get the count of employee by gender

use training;

db.emps.aggregate({
	$group: {
		_id: "$gender",
		emp_count: { $sum: 1 },
		total_salary_paid: { $sum: "$salary"},
		average_salary_paid: { $avg: "$salary"},
		min_salary_paid: { $min: "$salary"},
		max_salary_paid: { $max: "$salary"}
	}
}).pretty();

