

use training;


db.emps.find({}, {_id: 0, name: 1, salary: 1}).limit(5);
print("----------------------------------------");
// increment every employee's salary by 5% of respective salary

db.emps.update({},
{
	$mul: { salary: 1.05 }
}, {
	multi: true
});

db.emps.find({}, {_id: 0, name: 1, salary: 1}).limit(5);
print("----------------------------------------");
