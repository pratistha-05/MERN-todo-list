//jshint esversion:6
const express = require('express');
const app = express();
const path = require('path');
//-------------------------------------------------------------
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todo',{useNewUrlParser: true})//---------------
    .then(() => {
        console.log("MongoDB database connected")
    })
    .catch(err => {
        console.log("MongoDB database connection error!!")
        console.log(err)
    });

const todoSchema=new mongoose.Schema({     //SCHEMA
    name:{
        type:String,
        required:[true,"please add name of todo"]},//validation
    date:{
         type: Date,
         default: Date.now },
    priority:{
        type:Number,
        min:0,//limits
        max:5}
});    

const Todo=mongoose.model('Todo',todoSchema);  //MODEL

const todo=new Todo({  //ADDING AN ELEMENT
    name:"practice Leetcode question",
    date:3-11-21,
    priority:2
})
// const todo1=new Todo({
//     name:"dancing",
//     date:2-11-21,
//     priority:5
// })
// const todo2=new Todo({
//     name:"assignments",
//     date:3-11-21,
//     priority:4
// })
//-------------------------------
// Todo.insertMany([todo1,todo2],function(err){//inserting many objects
//     if(err)
//     console.log(err);
//     else
//     console.log("added");
// })
//---------------------
// Todo.updateOne({_id:"61ae2aad7e6ca6e389ac8d21"},{name:"assignments"},function(err){
//     if(err)
//     console.log(err);
//     else
//     console.log("updated");
// })
//--------------------------
Todo.deleteMany({name:"practice Leetcode question"},function(err){
    if(err)
    console.log(err);
    else
    console.log("deleted");
})

todo.save()
//---------------------------------------------------------------
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

var items=["dance","code"];
var work=[];
//render information/html/code at home page of the site
app.get("/",function(req,res){
    //res.sendFile(__dirname + '/index.html');

    var daynum=new Date().getDay();
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
    res.render('list',{title:day,newtodo:items});
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
        console.log(1);
        work.push(item);
    }
    else{
        console.log(0);
        items.push(item);
        res.redirect("/");
    }
    
    res.redirect("/work")
})

app.listen(3000,function(){
 console.log("server started!");
});