import redis from 'redis';

const client = redis.createClient();

client.on('error', err => {
  console.log('Redis client not connected to the server: ' + err.message);
});

client.on('connect', function () {
  console.log('Redis client connected to the server');
});

const key = ['Portland', 'Seattle', 'New York', 'Bogota', 'Cali', 'Paris'];
const value = [50, 80, 20, 20, 40, 2];

for (let i = 0; i < value.length; i++) {
  client.hset('HolbertonSchools', key[i], value[i], redis.print);
}

client.hgetall('HolbertonSchools', function (err, value) {
  console.log(value);
});
