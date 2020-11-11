const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get('/', async (req,res) => {
    try {
        const data = await burger.selectAll('burgers')
        res.render('index', {burgers: data})
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router