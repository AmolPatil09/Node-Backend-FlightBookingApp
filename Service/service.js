const Model=require('../Model/model')
const service={}

service.test=(req,res)=>{
    
    Model.test(req,res)
}

service.signUp=(req,res)=>{

}
service.login=(req,res)=>{

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