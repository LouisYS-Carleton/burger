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

router.get('/app/burgers', async (req, res) => {
    try {
        const data = await burger.selectAll('burgers')
        res.status(200).json({data: data})
    } catch {
        res.status(500).json(err)
    }
})

router.post('/app/burgers', async (req, res) => {
    try {
        const data = await burger.insertOne('burgers', req.body.burger_name, req.body.devoured);
        res.status(201).json(data);
    } catch (err) {
        res.status(500).json(err)
    }
})

router.patch('/api/burgers/', async (req, res) => {
    try {
        // console.log(req.body.id)
        const data = await burger.updateOne('burgers', parseInt(req.body.id));
        res.status(201).json(data);
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router