// get employees from "Iradan" city

use training;

// var crit = { city: "Iradan" };
var crit = { city: { $eq: "Iradan" } };
db.emps.find(crit).pretty();
print("----------------------------------------");

// get all "Male" employees

var cnt = db.emps.find({
	gender: /^male$/i
}).count();
print("There are " + cnt + " male employees");

var cnt = db.emps.find({
	gender: { $ne: "Male" }
}).count();
print("Count = " + cnt);
print("----------------------------------------");


// projection
// db.emps.find(SELECTION, PROJECTION)
db.emps.find({}, {
	_id: false,
	city: 0,
	gender: 0,
	email: 0x
}).limit(10);

print("----------------------------------------");
// selection can be empty object or null or undefined
db.emps.find({}, {
	_id: false,
	name: 1,
	email: true,
	phone: -50
}).limit(10);
print("----------------------------------------");

var condition1 = { salary: { $gte: 1000 }};
var condition2 = { salary: { $lte: 1500 }};

var cnt = db.emps.find({ $and: [ condition1, condition2 ]}).count();
print("No.of employees earning between $1000 and $1500 = " + cnt);

print("----------------------------------------");
var cnt = db.emps.find({
	$and: [
		{ gender: "Female"},
		{ salary: { $gte: 1000 }},
		{ salary: { $lte: 1500 }},
	]
}).count();

print("No.of female employees earning between $1000 and $1500 = " + cnt);

print("----------------------------------------");

var cur1 = db.emps.find({
	$and: [
		{ gender: "Female"},
		{ salary: { $gte: 1000 }},
		{ salary: { $lte: 1500 }},
	]
}, {
	_id: 0,
	name: 1,
	salary: 1
});
while(cur1.hasNext()) {
	var e1 = cur1.next();
	print(e1.name + " --> $" + e1.salary);
}










