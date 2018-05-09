
const modelTest=require('../models/users');

const testcontroller=()=>{
     
     function test(req, res) {
       modelTest.find({}, (err, result) => {
         if (err) {
           console.log(err);
         } else {
           res.render("index", { result: result });
         }
       });
     }
     function processs(req, res) {
    
       modelTest.remove({ name: req.body.name }, function(err) {
         if (err) return handleError(err);
         console.log(req.body.name);
       });
      
     }
      function Create(req, res) {

// var newObj = new modelTest({
//           name: "câcscsacsa",
//           vcsbdvds: req.body.duc,
//           cdsacas: req.body.name
//         });
        modelTest.create(
          { name:req.body.name
            ,duc:req.body.duc}, 
            function(err, small) {
          if (err) return handleError(err);
          // saved!
        });
        // newObj.save((err, result) => {
        //   if (err) {
        //     console.log(err);
        //   }
        // });
      }
     return { test: test, process: processs, Create: Create };
   

}
module.exports = testcontroller;