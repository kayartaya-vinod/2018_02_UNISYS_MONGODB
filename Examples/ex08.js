// upsert example


use training;

db.emps.update(
{ email: "vinod@vinod.co"},
{
	name: "Vinod",
	city: "Bangalore",
	email: "vinod@vinod.co",
	phone: "9731424784",
	gender: "Male",
	salary: 5000
},{
	upsert: true
});
