use training;

// orders placed by customers from "London"

var cnt = db.orders.find({
	"customer.city": "London"
}, {
	_id: 0,
	employee: 0,
	deliveredBy: 0,
	products: 0
}).count();

print("Total orders by customers from Londom = " + cnt);
print("------------------------------------------------");


var cnt = db.orders.find({
	$where: "this.customer['city'] == 'London'"
}, {
	_id: 0,
	employee: 0,
	deliveredBy: 0,
	products: 0
}).count();

print("Total orders by customers from Londom = " + cnt);
print("------------------------------------------------");

// how many orders have more than 5 products?
var cnt = db.orders.find({
	$where: "this.products.length > 5"
}).count();

print("how many orders have more than 5 products? " + cnt);
print("------------------------------------------------");

var cnt = db.orders.find({
	"products.5": { $exists: true}
}).count();

print("how many orders have more than 5 products? " + cnt);
print("------------------------------------------------");















