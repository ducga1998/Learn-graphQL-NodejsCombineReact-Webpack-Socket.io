
const path=require('path');

const mongoose = require("mongoose");
const bodyParser = require(`body-parser`);
const cookieParser = require(`cookie-parser`);
const session = require(`express-session`);


var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var port = process.env.PORT || 8000;
const Route=require('./route');



app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());
app.set(`views`, path.join(__dirname, `view`));
app.set(`view engine`, `ejs`);
app.get('/node',function(req,res){
   res.send("hello world");
});

mongoose.connect("mongodb://localhost:27017/databaseFirst");
 var Schema=mongoose.Schema;

// Works
io.on("connection", function(socket) {
  socket.on("chat message", function(msg) {
    io.emit("chat message", msg);
    console.log(msg);
  });
  socket.on("socketTest",(data)=>{
    console.log(data);
  })
  socket.on("subscribeToTimer", interval => {
    console.log("client is subscribing to timer with interval ", interval);
    setInterval(() => {
      io.emit("timer", new Date());
    }, interval);
  });
});


Route(app);
http.listen(port, function() {
  console.log("listening on *:" + port);
});
