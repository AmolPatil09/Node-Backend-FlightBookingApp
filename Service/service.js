const Model=require('../Model/model')
service={}

service.test=(req,res)=>{
    
    Model.test(req,res)
}


module.exports=service;