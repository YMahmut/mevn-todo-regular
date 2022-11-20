const Router = require('express');
const TodoList = require("../models/TodoList");

const router = Router();

router.post('/', async (req, res) => {
    const newTodoItem = new TodoList(req.body);
    try {
        const todoListItem = await newTodoItem.save();
        if (!!todoListItem) {
            res.status(200).json(todoListItem);
        } else {
            throw new Error('error occurred when saving new item')
        }

    } catch (err) {
        res.status(500).json({message: err.message})
    }
})
module.exports = router;