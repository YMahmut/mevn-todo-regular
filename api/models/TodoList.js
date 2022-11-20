const {Schema, model}=require('mongoose');

const TodoListSchema=new Schema({
    description:{type:String, require:true},
    completed:{type:Boolean,default: false}
});

const TodoList=model('todoList',TodoListSchema);
module.exports=TodoList;