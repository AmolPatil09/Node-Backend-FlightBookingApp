const express=require('express')
const app =express();
const bodyParser = require('body-parser');
const cors = require('cors');
const requestLogger=require('./Utilities/requstLogger')
const errorLogger=require('./Utilities/errorLogger')
const router =require('./Routing/routing')
app.use(bodyParser.json())
app.use(cors());
app.use(requestLogger)
app.use(router)
app.use(errorLogger)
app.listen(3000,()=>{
    console.log("FlightBooking App running posr 3000");
})