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

// const todo=new Todo({  //ADDING AN ELEMENT
//      name:"practice Leetcode question",
//      date:3-11-21,
//      priority:2
//  })
//---------------------------
 const todo1=new Todo({
     name:"dancing",
     date:2-11-21,
     priority:5
 })
 const todo2=new Todo({
     name:"assignments",
     date:3-11-21,
     priority:4
 })
//-------------------------------
//  Todo.insertMany([todo1,todo2],function(err){//inserting many objects
//      if(err)
//      console.log(err);
//      else
//      console.log("added");
//  })

//---------------------
// Todo.updateOne({_id:"61ae2aad7e6ca6e389ac8d21"},{name:"assignments"},function(err){
//     if(err)
//     console.log(err);
//     else
//     console.log("updated");
// })
//--------------------------
// Todo.deleteMany({name:"practice Leetcode question"},function(err){
//     if(err)
//     console.log(err);
//     else
//     console.log("deleted");
// })

// todo.save()
//---------------------------------------------------------------