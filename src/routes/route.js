const express = require('express');
const router = express.Router();
 
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]
 
   router.post('/players', function (req, res) {
 
       //LOGIC WILL COME HERE
       res.send(  { data: players , status: true }  )
   })
   
  
module.exports = router;



//const formate = require('../validater/formater');
/*const router = express.Router();

router.get('/test-me', function (req, res) {
     res.send('My first ever api!')
     console.log ('this is 1st problem')
    logger1.welcomes()

   



});
router.get ('/hello',function (req, res){
    res.send('my second api!')
    console.log ('first part of prob.4:')
    console.log (_.chunk(
        ['jan','feb', 'mar','april','june','july','aug','sept','oct','nov','dec']
    ));


    console.log ('second part of prob.4:')
    console.log (_.tail(
        [1,3,5,9,7,13,15,17,,19,21]
    ));

    console.log ('third part of prob.4:')
    console.log (_.fromPairs(
        [
            ["horror","The Shining"]
            ["drama", "Titanic"]
            ["thriller", "Shutter Island"]
            ["fantasy" , "Pans Labyrinth"]
        ]
    ));

} );

module.exports = router;
// adding this comment for no reason*/
