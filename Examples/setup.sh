# folders for config servers

cd clusterdemo
mkdir logs

mkdir cfg0
mkdir cfg1
mkdir cfg2

mkdir a0
mkdir a1
mkdir a2
mkdir b0
mkdir b1
mkdir b2
mkdir c0
mkdir c1
mkdir c2
mkdir d0
mkdir d1
mkdir d2

sudo mongod --configsvr --replSet cfg --port 26050 --dbpath cfg0 --fork --logpath logs/log.cfg0 --logappend --bind_ip localhost,192.168.43.221
sudo mongod --configsvr --replSet cfg --port 26051 --dbpath cfg1 --fork --logpath logs/log.cfg1 --logappend --bind_ip localhost,192.168.43.221
sudo mongod --configsvr --replSet cfg --port 26052 --dbpath cfg2 --fork --logpath logs/log.cfg2 --logappend --bind_ip localhost,192.168.43.221

# start the shards
# shard-a

sudo mongod  --shardsvr --replSet a --port 27000 --dbpath a0 --fork --logpath logs/logs.a0 --logappend --bind_ip localhost,192.168.43.221
sudo mongod  --shardsvr --replSet a --port 27001 --dbpath a1 --fork --logpath logs/logs.a1 --logappend --bind_ip localhost,192.168.43.221
sudo mongod  --shardsvr --replSet a --port 27002 --dbpath a2 --fork --logpath logs/logs.a2 --logappend --bind_ip localhost,192.168.43.221

sudo mongod  --shardsvr --replSet b --port 27100 --dbpath b0 --fork --logpath logs/logs.b0 --logappend --bind_ip localhost,192.168.43.221
sudo mongod  --shardsvr --replSet b --port 27101 --dbpath b1 --fork --logpath logs/logs.b1 --logappend --bind_ip localhost,192.168.43.221
sudo mongod  --shardsvr --replSet b --port 27102 --dbpath b2 --fork --logpath logs/logs.b2 --logappend --bind_ip localhost,192.168.43.221

sudo mongod  --shardsvr --replSet c --port 27200 --dbpath c0 --fork --logpath logs/logs.c0 --logappend --bind_ip localhost,192.168.43.221
sudo mongod  --shardsvr --replSet c --port 27201 --dbpath c1 --fork --logpath logs/logs.c1 --logappend --bind_ip localhost,192.168.43.221
sudo mongod  --shardsvr --replSet c --port 27202 --dbpath c2 --fork --logpath logs/logs.c2 --logappend --bind_ip localhost,192.168.43.221

sudo mongod  --shardsvr --replSet d --port 27300 --dbpath d0 --fork --logpath logs/logs.d0 --logappend --bind_ip localhost,192.168.43.221
sudo mongod  --shardsvr --replSet d --port 27301 --dbpath d1 --fork --logpath logs/logs.d1 --logappend --bind_ip localhost,192.168.43.221
sudo mongod  --shardsvr --replSet d --port 27302 --dbpath d2 --fork --logpath logs/logs.d2 --logappend --bind_ip localhost,192.168.43.221










