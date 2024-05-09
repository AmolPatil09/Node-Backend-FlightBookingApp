const express = require('express');
const router = express.Router();
const service = require('../Service/service')


router.post('/signUp', (req, res) => {

})

router.post('/login', (req, res) => {

})
router.get('/flights', (req, res) => {

})
router.post('/bookFlight', (req, res) => {

})
router.delete('/cancelFlight', (req, res) => {

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