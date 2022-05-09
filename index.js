//index.js
// const express = require('express')
// const cors = require('cors')
// const connection = require("./db.js");


// const app = express();
// app.use(cors())

// const port = process.env.PORT || 8080;

// // app.get('/', (req, res) => {
// //   res.send('Hello World again!')
// // });

// app.listen(port, () => {
//   console.log(`Cloud computing app listening on port ${port}!`)
// });

// // index.js
// const express = require("express");
// const connection = require("./db.js");

// const app = express();
// const port = process.env.PORT || 8080;

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}!`);
// });

// app.get("/messages", (req, res) => {
//   connection.query("SELECT * FROM messages", (err, results) => {
//     if (err) {
//       return res.send(err);
//     }

//     return res.json({
//       data: results,
//     });
//   });
// });


// index.js
const express = require("express");
const messagesRouter = require("./router/messagesRouter"); //look here
const bodyParser = require("body-parser");

const app = express();
// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/messages', messagesRouter); //and look here too

const port = 8080;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});