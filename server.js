//object.method(arguments);
//console.log(`Its working`);

//1, sImport Area
const express = require('express')


const app = express();
app.use(express.json());
// app == object
//object.method(argument)
//object.method(middleware)

//object.method();

//Callback function = cbfn
app.post('/students',function(req,res){
    //object.property

    console.log(req.body);

    //object.method()
    res.status(210).json({
        "name":req.body.name,
        "surname":req.body.surname
    });
});// Normal function
app.post('/students2',()=>{}); //Fat Arrow function

const PORT = 6000;
//object.method(argguments)
app.listen(PORT,function(){
    console.log(`The server is running on ${PORT}  port`);
});