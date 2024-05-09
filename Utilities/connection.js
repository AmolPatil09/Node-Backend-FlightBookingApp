const mongoose =require('mongoose');


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

const connection={}
const url=""
const connect=async(docName,dacName)=>{
   (await mongoose.connect(url,{})).model(docName,dacName)
}

connection.getflightInfo=()=>{
   try {
    return connect('flightInfo',flightInfoSchema)
   } catch (err) {
        let error =new Error("Could not connect database");
        error.status=500;
        throw error
   
   }
}
connection.getUsers=()=>{
    try {
     return connect('users',userSchema)
    } catch (err) {
         let error =new Error("Could not connect database");
         error.status=500;
         throw error
    
    }
 }
 connection.getFligts=()=>{
    try {
     return connect('fligts',fligtsSchema)
    } catch (err) {
         let error =new Error("Could not connect database");
         error.status=500;
         throw error
    
    }
 }

 connection.getTraveller=()=>{
    try {
     return connect('traveller',travellerSchema)
    } catch (err) {
         let error =new Error("Could not connect database");
         error.status=500;
         throw error
    
    }
 }

 

 connection.getTraveller=()=>{
    try {
     return connect('book',bookSchema)
    } catch (err) {
         let error =new Error("Could not connect database");
         error.status=500;
         throw error
    
    }
 }

 module.exports=connection;