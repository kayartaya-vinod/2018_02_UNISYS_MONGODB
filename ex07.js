use training;

print("Before update:")
db.emps.findOne(
	{"_id" : ObjectId("5a8e694da2e8d59eab4ff919")});


db.emps.update(
	{"_id" : ObjectId("5a8e694da2e8d59eab4ff919")},
	{
		$set: {
			salary: 2000,
			city: "Dallas",
			state: "Texas",
			country: "USA"
		},
		$unset: {
			email: true,
			phone: true
		}
	}
);

print("After update: ")
db.emps.findOne(
	{"_id" : ObjectId("5a8e694da2e8d59eab4ff919")});
