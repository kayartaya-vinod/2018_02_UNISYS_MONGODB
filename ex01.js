// ex01.js
// add multiple documents to a collection

// mongo < ex01.js

use training;

var data = [
{
	name: 'Ramesh Kumar',
	email: 'rameshkumar@example.com',
	city: 'Chennai'
}, {
	firstname: 'Rajesh',
	lastname: 'CS',
	address: {
		city: 'Shimoga',
		state: 'Karnataka'
	},
	phone: '9888277711'
}];

db.phonebook.insert(data);