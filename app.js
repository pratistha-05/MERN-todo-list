//jshint esversion:6
const express = require('express');
const app = express();
const path = require('path');
const Todo=require('./models/todoSchema')
//-------------------------------------------------------------
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todoDB',{useNewUrlParser: true})//---------------
    .then(() => {
        console.log("MongoDB database connected")
    })
    .catch(err => {
        console.log("MongoDB database connection error!!")
        console.log(err)
    });
//------------------------------------------------------------


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));



//render information/html/code at home page of the site
app.get("/",function(req,res){
    //res.sendFile(__dirname + '/index.html');

    /*var daynum=new Date().getDay();
    var day="";
    var today = new Date().toLocaleDateString();
    switch(daynum)
    {
        case 0:
            day="sunday";
            break;
        case 1:
            day="Monday";
            break;
        case 2:
            day="Tuesday";
            break;
        case 3:
            day="wednesday";
            break;
        case 4:
            day="thursday";
            break;
        case 5:
            day="friday";
            break;
        case 6:
            day="saturday";
            break;
    }
    day=day+" , "+today;
    */
   Todo.find({},function(err,foundTodo){
    res.render('list',{title:"Today",newtodo:foundTodo});

   });
})


/*
app.get("/about",function(request,response){
    response.send("<h1>Contact : 7668350449</h1>")
})
*/

app.get("/work",function(req,res){
    res.render("list",{title:"Work",newtodo:work})
})

app.post("/",function(request,res){
    var item=request.body.todo;
    if(request.body.list === "Work")
    {

        work.push(item);
    }
    else{

        //items.push(item);
        res.redirect("/");
    }
    
    res.redirect("/work")
})


app.listen(3000,function(){
 console.log("server started!");
});