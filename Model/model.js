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
Model.login=(req,res)=>{

}
Model.getAllFights=(req,res)=>{

}
Model.bookFlight=(req,res)=>{

}
Model.cancelFlight=(req,res)=>{

}
Model.getAllBookingByUser=(req,res)=>{

}
Model.getAllBookingAdmin=(req,res)=>{

}
Model.cancelBookingOfAdmin=(req,res)=>{

}
Model.logout=(req,res)=>{    
}


module.exports=Model;