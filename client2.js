import io from 'socket.io-client';
import readline from 'readline';

const socket2 = io.connect('http://server2IP:3000');

socket2.on('connect', () => {
  console.log('Connected to Server 2');

  const rl2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl2.question('Type a message for client 1: ', (message) => {
    socket2.emit('chat message', message);
    rl2.close();
  });
});

socket2.on('chat message', (msg) => {
  console.log('Received message on client 2:', msg);
});
