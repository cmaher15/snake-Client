const net = require("net");
const { IP, PORT } = require("./constants");



console.log(IP);
console.log(PORT);
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  }
  );


  //message when player successfully connects to the server and snake name
  conn.on('connect', () => {
    console.log('Successfully connected to game server!');
    conn.write('Name: CIM');
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