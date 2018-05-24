// working with map reduce function

use training;

function map() {
	// This function is called by mapReduce for every document.
	// The current document under process is accessible via 'this'
	// From the document given (this), you should 'emit' two properties.
	// Property #1 --> key (group by)
	// Property #2 --> value (perform aggregate on)
	emit(this.gender, 1);
}

function reduce(key, values) {
	return Array.sum(values);
}

// var options = {
// 	out: "emps_count_by_gender"
// };


var options = {
	out: { inline: true }
};

db.emps.mapReduce(map, reduce, options).results;

