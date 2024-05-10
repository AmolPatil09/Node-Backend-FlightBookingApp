const express = require('express');
const router = express.Router();
const service = require('../Service/service')
let User=require('../Model/User')

router.post('/signUp', async(req, res,next) => {
    const signUpData=req.body;
    try {
    const signUp= await service.signUp(signUpData);
    res.send(signUp) ;
    } catch (error) {
       next(error) 
    }

})

router.post('/login', async(req, res,next) => { 
    const {emailId,password}=req.body;
    try {
    const login=await service.login(emailId,password);
    res.json("login success")
        
    } catch (error) {
        next(error)
    }

})
router.get('/flights', (req, res,next) =>{

})
router.post('/bookFlight', (req, res,next) => {

})
router.delete('/cancelFlight', (req, res,next) => {

})
router.get('/allBookings/:userName', (req, res) => {

})
router.get('/allBookings', (req, res) => {

})
router.get('/cancelBookingByAnyUser', (req, res) => {

})

router.get('/logout', (req, res) => {

})
router.all('*', (req, res) => {

})

module.exports = router;