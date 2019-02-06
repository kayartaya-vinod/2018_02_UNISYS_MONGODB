use authdb;

db.createUser({
	user: 'administrator',
	pwd: 'topsecret',
	roles: [
		{
			role: "userAdminAnyDatabase",
			db: "admin"
		}
	]
});

use authdb;
db.createUser({
	user: 'vinod',
	pwd: 'vinod@123',
	roles: [
		{
			role: 'readWrite',
			db: 'training'
		}
	]
})


// start server:
// mongod --dbpath . --auth

// start the client:
// mongo --authenticationDatabase authdb --username administrator --password topsecret admin
