import { io } from 'socket.io-client';
import readline from 'readline';


// Client on EC2 Instance 1
const socket1 = io.connect('http://server1IP:3000');

socket1.on('connect', () => {
  console.log('Connected to Server 1');

  const rl1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl1.question('Type a message for client 2: ', (message) => {
    socket1.emit('chat message', message);
    rl1.close();
  });
});

socket1.on('chat message', (msg) => {
  console.log('Received message on client 1:', msg);
});
