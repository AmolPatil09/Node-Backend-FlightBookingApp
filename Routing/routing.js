const express = require('express');
const router = express.Router();
const service = require('../Service/service')


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
    res.json({"message":"login success"})
        
    } catch (error) {
        next(error)
    }

})
router.get('/flights', async(req, res,next) =>{
    try {
        const flights=await service.getAllFights();
        res.json(flights)
            
        } catch (error) {
            next(error)
        }

})
router.post('/bookFlight/:userName', async(req, res,next) => {
    const userName=req.params.userName;
    const bookingData=req.body;
    try {
    const booking= await service.bookFlight(bookingData,userName);
    res.json(booking) ;
    } catch (error) {
       next(error) 
    }

})
router.put('/cancelBooking/:userName/:bookingId', async(req, res,next) => {
    const userName=req.params.userName;
    const bookingId=Number(req.params.bookingId);
    try {
    const booking= await service.cancelFlightBooking(bookingId,userName);
    res.json(booking) ;
    } catch (error) {
       next(error) 
    }
})
router.get('/allBookings/:userName', async(req, res,next) => {
    const bookingId=req.params.userName;
    try {
        const bookings=await service.getAllBookingByUser(bookingId);
        res.json(bookings)
            
        } catch (error) {
            next(error)
        }
})
router.get('/allBookings', async(req, res,next) => {
    try {
        const flights=await service.getAllFights();
        res.json(flights)
            
        } catch (error) {
            next(error)
        }

})

router.all('*', (req, res,next) => {
        try {
            const error=new Error("404 page not found")
            error.status=400
            throw error  
        } catch (error) {
            next(error)
        }
})

module.exports = router;