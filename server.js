const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const morgan=require('morgan');
const bodyParser=require('body-parser');

const mongoose = require("mongoose");

app.use(cors());
app.use(morgan('tiny'));

mongoose.connect(process.env.MONGO_URI,{})
    .then(()=>console.log("database connection success"))
    .catch((err)=>console.log(err));
app.use(bodyParser.json());


const todoListItemsRoutes=require('./api/services/todoLists')
const newTodoRoutes=require('./api/services/newTodo')
const updateTodoRoutes=require('./api/services/updatetodo')
const deleteTodoRoutes=require('./api/services/deleteTodo')

app.use('/api/todoLists', todoListItemsRoutes)
app.use('/api/newTodo', newTodoRoutes)
app.use('/api/updateTodo', updateTodoRoutes)
app.use('/api/deleteTodo', deleteTodoRoutes)


app.listen(process.env.PORT,()=>{
    console.log("listening from",process.env.PORT);
})