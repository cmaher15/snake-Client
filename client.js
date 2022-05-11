const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  }
  );


  //message when player successfully connects to the server and snake name
  conn.on('connect', () => {
    console.log('Successfully connected to game server!');
    conn.write('Name: CIM');
  });

  //created to move the snake left at intervals of 50ms
  conn.on('connect', () => {
    setInterval(() => {
      conn.write('Move: left');
    }, 50);
  });


  //message when player is kicked out for idling
  conn.on('data', (data) => {
    console.log('you ded cuz you idled');
    conn.end();
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;