const connection=require('../Utilities/connection')
const Model={}
Model.checkUser=async(emailId)=>{
    const model=await connection.getUsers();
    console.log(model);
    const user=await model.findOne({emailId:emailId}) 
    return user;
}
Model.signUp=async(signUpData)=>{
    const model=await connection.getUsers();
    const user=await model.create(signUpData)
    return user;
}
Model.getAllFights=async()=>{
    const model=await connection.getflightInfo();
    const flights=await model.find({});
    return flights;  

}
Model.bookFlight=async(bookingData,userName)=>{
  
    const model=await connection.getUsers();
    const flights=await model.updateOne({userName:userName},{$push:{bookings:bookingData}});
    return flights;  


}
Model.cancelFlightBooking=async(bookingId,userName)=>{
    const model=await connection.getUsers();

    // const booking=await model.updateOne({userName:userName},{$pull:{bookings:{bookingsId:bookingId}}});
    const booking=await model.updateOne({userName:userName},{$pull:{bookings:{bookingsId:bookingId}}});
    return booking;
}
Model.getAllBookingByUser=async(userName)=>{
    const model=await connection.getUsers();
    const Booking=await model.find({userName:userName},{_id:0,bookings:1})
    return Booking;
}

module.exports=Model;