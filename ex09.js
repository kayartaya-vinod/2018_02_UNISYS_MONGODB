

use training;


db.emps.find({}, {_id: 0, name: 1, salary: 1}).limit(5);
print("----------------------------------------");
// increment every employee's salary by $100

db.emps.update({},
{
	$inc: { salary: 100 }
}, {
	multi: true
});

db.emps.find({}, {_id: 0, name: 1, salary: 1}).limit(5);
print("----------------------------------------");
