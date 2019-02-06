// group employees by their salary 

// grade-a --> 0 to 1000
// grade-b --> 1001 to 2000
// grade-c --> 2001 to 3000
// grade-d --> > 3000

use training;

db.emps.mapReduce(function(){

	if(this.gender != "Male") return;

	var grade = "D";

	if(this.salary <= 1000) {
		grade = "A";
	}
	else if(this.salary <= 2000) {
		grade = "B";
	}
	else if(this.salary <= 3000) {
		grade = "C";
	}

	emit(grade, 1);
}, function(key, values){
	return Array.sum(values);
}, {
	out: { inline: true }
}).results;







