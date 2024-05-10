const mongoose =require('mongoose');

const userBooking=new mongoose.Schema({

    bookingsId:{
        type:String,
        unique:true,
        require:true
       },
    status:{
        type:String,
        require:true
       }
    
})
const travellerSchema=new mongoose.Schema({

    passangerName:{
        type:String,
        require:true
       },
    passangerAge:{
        type:Number,
        require:true
       },
    gender:{
        type:Number,
        require:true
    },
    bookingStatus:
    {
            type:String,
            require:true
        
    }
})
const bookSchema=new mongoose.Schema({

    eamilId:{
        type:String,
        require:true
       },
    bookingsId:{
        type:Number,
        require:true
       },
    bookingsCost:{
        type:Number,
        require:true
       },
   departureDate:{
        type:Date,
        require:true
       },
   travelBookingClass:{
        type:String,
        require:true
       },
   noOfTickets:{
        type:String,
        require:true
       },
    passangerDetails:{
        type:travellerSchema,
        require:true
       },
    ticketStatus:{
        type:String,
        require:true
       },
})
const userSchema=new mongoose.Schema({
      emailId:{
        type:String,
        unique:true,
        require:true
    
       },
       password:{
        type:String,
        require:true
        
       },
       userName:{
        type:String,
        require:true
       },
       walletAmount:{
        type:Number,
        require:true
       },
       type:{
        type:String,
        require:true
    
       },
       role:{
        type:String,
        require:true
    
       },
       bookings:{
        type:userBooking,
        require:true
       }

})



const fligtsSchema=new mongoose.Schema({

    source:{
        type:String,
        require:true
       },
    destnation:{
        type:String,
        require:true
       },
    flights:{
        type:String,
        require:true
       }
})

const flightInfoSchema=new mongoose.Schema({
    flightId:{
        type:String,
        unique:true,
        require:true
       },
    flightName:{
        type:String,
        require:true
       },
    flightStatus:{
        type:String,
        require:true
       },

   departureTime:{
        type:String,
        require:true
       },
   arrivalTime:{
        type:String,
        require:true
       },
    seatAvilable:{
        type:Number,
        require:true
       },
    fare:{
        type:Number,
        require:true
       },
   stops:{
        type:Number,
        require:true
       },
    bookings:{
        type:bookSchema,
        require:true
       },
    
})





const connection={}
const url="mongodb://localhost:27017/FlightBooking"
const connect=async(docName,dacName)=>{
   return (await mongoose.connect(url,{useNewUrlParser:true})).model(docName,dacName)
}

connection.getflightInfo=async()=>{
   try {
    return await connect('flightInfo',flightInfoSchema)
   } catch (err) {
        let error =new Error("Could not connect database");
        error.status=500;
        throw error
   
   }
}
connection.getUsers= async()=>{
    try {
     return (await mongoose.connect('mongodb://127.0.0.1:27017/flight',{})).model('user',userSchema)
    } catch (err) {
        console.log(err);
         let error =new Error("Could not connect database");
         error.status=500;
         throw error
    
    }
 }
 connection.getFligts=async()=>{
    try {
     return await connect('fligts',fligtsSchema)
    } catch (err) {
         let error =new Error("Could not connect database");
         error.status=500;
         throw error
    
    }
 }

 connection.getTraveller=async()=>{
    try {
     return await connect('traveller',travellerSchema)
    } catch (err) {
         let error =new Error("Could not connect database");
         error.status=500;
         throw error
    
    }
 }

 

 connection.getTraveller=async()=>{
    try {
     return await connect('book',bookSchema)
    } catch (err) {
         let error =new Error("Could not connect database");
         error.status=500;
         throw error
    
    }
 }

 module.exports=connection;