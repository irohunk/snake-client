const { MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, SAY_GOODGAME_KEY, SAY_HAHA_KEY, SAY_NICE_KEY } = require("./constants")

const setupInput = function (conn) {
  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  stdin.on("data", (key) => handleUserInput(key, conn));
  return stdin;   // return the stdin object so we can use it elsewhere in the program
};

const handleUserInput = (key, conn) => {
  if (key === "\u0003") {
    process.exit();  
  }
  if (key === MOVE_UP_KEY) {
    conn.write("Move: up");
  } else if (key === MOVE_LEFT_KEY) {
    conn.write("Move: left");
  } else if (key === MOVE_DOWN_KEY) {
    conn.write("Move: down");
  } else if (key === MOVE_RIGHT_KEY) {
    conn.write("Move: right");
  } else if (key === SAY_NICE_KEY) {
    conn.write("Say: nice");
  } else if (key === SAY_HAHA_KEY) {
    conn.write("Say: haha");
  } else if (key === SAY_GOODGAME_KEY) {
    conn.write("Say: good game");
  }
};


// const handleUserInput = (key, conn) => {
//   if (key === "\u0003") {
//     process.exit();  
//   }
//   if (key === 'w') {
//     conn.write("Move: up");
//   } else if (key === 'a') {
//     conn.write("Move: left");
//   } else if (key === 's') {
//     conn.write("Move: down");
//   } else if (key === 'd') {
//     conn.write("Move: right");
//   } else if (key === 'n') {
//     conn.write("Say: nice");
//   } else if (key === 'h') {
//     conn.write("Say: haha");
//   } else if (key === 'g') {
//     conn.write("Say: good game");
//   }
// };

module.exports = setupInput;