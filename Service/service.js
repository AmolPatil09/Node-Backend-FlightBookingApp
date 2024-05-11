const Model=require('../Model/model')
const service={}


service.signUp=async(signUpData)=>{
  const user=await Model.checkUser(signUpData.emailId)
  if (user) {
    const error=new Error("User is alredy register")
    error.status=400
    throw error
  } else {
    const creatUser= await Model.signUp(signUpData);
    if (creatUser) {
      return creatUser;

    } else {
        const error=new Error("Something went wrong")
        error.status=400
        throw error 
    }
  }
}
service.login=async(emailId,password)=>{
     const user=await Model.checkUser(emailId);
     if(user){
        if(user.password===password){
            return "Login Success"
        }
        else{
            const error=new Error("Incorrect Password")
            error.status=400
            throw error  
        }
     }
     else{
        const error=new Error("User not exist")
        error.status=400
        throw error  
    }
}

service.getAllFights=async()=>{
    const flights=await Model.getAllFights();
    if (flights) {
        return flights;
    } else {
        const error=new Error("Something went wrong")
        error.status=400
        throw error 
    }

}
service.bookFlight=async(bookingData,userName)=>{
    
    const booking=await Model.bookFlight(bookingData,userName);
    if (booking) {
        return booking;
    } else {
        const error=new Error("Something went wrong")
        error.status=400
        throw error 
    }
}
service.cancelFlightBooking=async(bookingId,userName)=>{
    const booking=await Model.cancelFlightBooking(bookingId,userName);
    if (booking) {
        return booking;
    } else {
        const error=new Error("Something went wrong")
        error.status=400
        throw error 
    }

}
service.getAllBookingByUser=async(userName)=>{
    const booking=await Model.getAllBookingByUser(userName);
    if (booking) {
        return booking;
    } else {
        const error=new Error("Something went wrong")
        error.status=400
        throw error 
    }

}


module.exports=service;