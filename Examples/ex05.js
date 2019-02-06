
// get all contacts from phonebook only if "city" property exists


use training;

db.phonebook.find({
	city: { $exists: true}
}).pretty();

print("-------------------------------------------------")
db.phonebook.find({
	city: { $exists: false}
}).pretty();

print("-------------------------------------------------")

var cnt = db.emps.find({
	$where: "this.gender=='Male' && this.salary >= 1000 && this.salary <=1500"
}).count();

print("No.of Male employees earning between $1000 and $1500 = " + cnt);
print("-------------------------------------------------")









