// using the cursor for accessing data

use training;

var c1 = db.emps.find(); // returns a cursor

var i = 1;
while(c1.hasNext()) {
	var e = c1.next();
	
	if(e.salary <= 3400) continue;

	print(i++ + ") " + e.name + " earns $" + e.salary);
}

// in a windows shell,
// mongo < ex03.js