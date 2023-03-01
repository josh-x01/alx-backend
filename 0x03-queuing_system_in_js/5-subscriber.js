import redis from 'redis';

const client = redis.createClient();

client.on('connect', function () {
  console.log('Redis client connected to the server');
});

client.on('error', function (err) {
  console.log('Redis client not connected to the server: ' + err.message);
});

client.subscribe('holberton school channel');

client.on('message', (channel, msg) => {
  if (channel === 'holberton school channel') {
    if (msg === 'KILL_SERVER') {
      client.unsubscribe('holberton school channel');
      console.log(msg)
      client.quit();
    }
  } else {
    console.log(msg);
  }
});