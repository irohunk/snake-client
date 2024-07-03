const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541 // PORT number here,
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('connect', () => {
    console.log("connection to snake server established successfully");
    conn.write("Name: Ron");
  });

  // conn.on('connect', () => {
  //   conn.write("Move: up");
  //   conn.write("Move: left");
  //   conn.write("Move: down");
  //   conn.write("Move: right");
  // });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
};

module.exports = connect;