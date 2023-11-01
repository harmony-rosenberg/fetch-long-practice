/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/
// server.js
const http = require('http');

const server = http.createServer((req, res) => {

});
/* ============================== Phase 1 ============================== */

// Your code here
fetch('/products', {
    method: 'POST',
    body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });



/* ============================== Phase 2 ============================== */

// Your code here



/* ============================== Phase 3 ============================== */

// Your code here
