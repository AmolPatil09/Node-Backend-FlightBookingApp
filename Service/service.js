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

service.getAllFights=(req,res)=>{

}
service.bookFlight=(req,res)=>{

}
service.cancelFlight=(req,res)=>{

}
service.getAllBookingByUser=(req,res)=>{

}
service.getAllBookingAdmin=(req,res)=>{

}
service.cancelBookingOfAdmin=(req,res)=>{

}
service.logout=(req,res)=>{
    
}


module.exports=service;