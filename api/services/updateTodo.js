const Router = require('express');
const TodoList = require("../models/TodoList");

const router = Router();

router.put('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const response = await TodoList.findByIdAndUpdate(id, req.body)
        if (!!response) {
            const updated = {...response._doc, ...req.body}
            res.status(200).json(updated)
        } else throw new Error('Something went wrong ');
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
module.exports = router;