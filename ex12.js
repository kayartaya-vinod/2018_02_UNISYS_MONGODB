// get the count, average, min, max and sum of sales amount 
// for each category of products


use training;

var pipeline = {
	$group: {
		_id: "$category",
		count: { $sum: 1 },
		max: { $max: "$sales" },
		min: { $min: "$sales" },
		average: { $avg: "$sales" },
		total: { $sum: "$sales" },
	}
};

var options = {
	$match: {
		count: { $gte: 40 }
	}
};

var sort_by = {
	$sort: { average: -1 }
};


db.salesdata.aggregate(pipeline, options, sort_by).pretty();






