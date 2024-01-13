const dotenv=require('dotenv');
dotenv.config({path:'../.env'})
const express=require('express')
const secretkey=process.env.secretkey;
const app=express();
const cookieparser=require('cookie-parser')
app.use(cookieparser())

// const secretkey=process.env.secretkey;
const jwt=require('jsonwebtoken');
exports.checker=(req,resp,next)=>{
console.log("tkoen vala function ",req.cookies['test'])
const token=req.cookies['test'];
// console.log(secretkey)
jwt.verify(token,secretkey,(error,authData)=>{
      console.log(">>>>auth data",authData)
      if(!error){console.log(authData);
            const {user}=authData
            req.user=user; 
            
      }
      else {
            req.user=null;
            console.log("error",error.message);
      }
})
next();
}