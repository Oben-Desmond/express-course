const express = require(`express`)
const router= express.Router()

router.get(`/`, (req, res) => {
     
    // console.log(req.query)
    console.log(req.body)
    console.log(req.query)
    // res.sendFile()
})

router.post(`/`, (req, res) => {
     
    // console.log(req.query)
    console.log(req.body)
    res.json(req.body)
    // res.sendFile()
})

router.get(`/book`, (req, res) => {
     
    // console.log(req.query)
    console.log(req.query)
    res.json(req.query)
    // res.sendFile()
})
router.post(`/book`, (req, res) => {
     
    // console.log(req.query)
    console.log(req.body)
    res.json(req.body)
    // res.sendFile()
})

module.exports=router



