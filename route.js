
const test=require("./controller/testController")();
module.exports=(app)=>{

    app.get("/about", (req, res)=>{
            res.send("Node Run");
    });
    app.get("/home", (req, res) => {
      res.send("Page Home");
    });
    app.get('/view',(req,res)=>{
        res.render("index", { title: "Hey", message: "Hello there!" });
    });
    app.get('/test',test.test);
   app.post("/submit", test.process);
   app.post('/create',test.Create);
 }