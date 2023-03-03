import { createClient } from 'redis';

const client = createClient();

client.on('error', err => {
  console.log('Redis client not connected to the server: ' + err.message);
});

client.on('connect', function () {
<<<<<<< HEAD
  console.log('connected');
=======
  console.log('Redis client connected to the server');
>>>>>>> f4508544c2a473d9e39655976950096176424587
})
