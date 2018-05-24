// alphabatical count of employee names

use training;

function map() {
	var first_char = this.name.substring(0, 1).toUpperCase();
	emit(first_char, 1);
}

function reduce(first_char, arr) {
	return Array.sum(arr);
}

var options = { out: { inline: true }};

db.emps.mapReduce(map, reduce, options).results;