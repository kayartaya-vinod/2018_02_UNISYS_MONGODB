use training;


db.sbi_atms.createIndex({ coords: "2d" });


db.sbi_atms.find({
	coords: {
		$near: [12.935451, 77.533795]
	}
}, { _id: 0 }).limit(2).pretty();
