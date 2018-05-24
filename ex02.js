// update existing document

use training;

var p1 = {
	"_id" : ObjectId("5a8e5adbbf2888f9d878b507"),
	"name" : "vinod",
	"emails" : ["vinod@vinod.co", "vinod@knowledgeworksindia.com"],
	"phone" : "9844083934",
	city: "Bangalore"
};

// db.phonebook.insert(p1); // fail, since _id can not be duplicated
db.phonebook.save(p1); // since _id already exists, updates the same


// issue this command from WINDOWS command prompt
// mongo < ex02.js
