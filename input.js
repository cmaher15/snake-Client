// const connect = require("./client");

let connection;

// const handleUserInput = function(key) {
//   if (key === '\u0077') {
//     connection.write('Move: up')
//   }
//   if (key === '\u0061') {
//     connection.write('Move: left')
//   }
//   if (key === '\u0073') {
//     connection.write('Move: down')
//   }
//   if (key === '\u0064') {
//     connection.write('Move: right')
//   }
//   if (key === '\u0003') {
//     process.exit();
//   }
// };


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = function(key) {
    if (key === '\u0077') {
      connection.write('Move: up');
    }
    if (key === '\u0061') {
      connection.write('Move: left');
    }
    if (key === '\u0073') {
      connection.write('Move: down');
    }
    if (key === '\u0064') {
      connection.write('Move: right');
    }
    if (key === '\u0072') {
      connection.write('Say: I am smol')
    }
    if (key === '\u0003') {
      process.exit();
    }

  };
  stdin.on("data", handleUserInput);
  return stdin;
};

setupInput();

module.exports = setupInput;