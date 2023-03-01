import redis from 'redis';
import util from 'util'

const client = redis.createClient();

client.on('error', err => {
  console.log('Redis client not connected to the server: ' + err.message);
});

client.on('connect', function () {
  console.log('Redis client connected to the server');
})

function setNewSchool (schoolName, value) {
  client.set(schoolName, value, redis.print);
}

async function displaySchoolValue (schoolName) {
  const asyncClient = util.promisify(client.get).bind(client);
  console.log(await asyncClient(schoolName));
}

// calling methods

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
