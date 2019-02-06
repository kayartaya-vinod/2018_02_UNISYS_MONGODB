// find the products for each category with highest and lowest sales

use training;


var sort_by = {
	$sort: { sales: -1 }
};

var group_by = {
	$group: {
		_id: "$category",
		max_sales: { $first: "$sales" },
		max_sales_product: { $first: "$product" },
		min_sales: { $last: "$sales" },
		min_sales_product: { $last: "$product" },
	}
};

db.salesdata.aggregate(sort_by, group_by).pretty();