const Router = require('express');
const TodoList = require("../models/TodoList");

const router = Router();
router.get('/', async (req, res) => {
    try {
        const todoListAllItems = await TodoList.find();
        if (!!todoListAllItems) {
            res.status(200).json(todoListAllItems);
        } else {
            throw new Error('There is no todo item');
        }
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

module.exports = router;