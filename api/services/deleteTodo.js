const Router = require('express');
const TodoList = require("../models/TodoList");

const router = Router();

router.delete('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const removed = await TodoList.findByIdAndDelete(id)
        if (!!removed)
            res.status(200).json(removed);
        else throw new Error('Something went wrong ')
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
module.exports = router;