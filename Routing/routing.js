const express=require('express');
const router=express.Router();
const service=require('../Service/service')

router.get('/',(req,res)=>{
   service.test(req,res) 
})


module.exports=router;