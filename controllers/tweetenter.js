const express=require('express');
const app=express();
const con=require('../mysql_connection');
const cookiesparser=require('cookie-parser')
// app.use(express.urlencoded({extended:true}));
app.use(cookiesparser());
const validatorforoggeduser=require('./validatorforoggeduser')



exports.registertweet=(req,resp)=>{
      if(req.user){const data=req.user;
      const {name:writtenby, email:emailby}=req.user
      console.log(data)
      console.log(req.body)
      const {about,content,tag}=req.body;
      con.query('insert into tweet SET ?',{writtenby,emailby,about,content,tag},(error,result)=>{
      if(!error) 
      {
            // resp.send("<h1>Thnaks for the tweet</h1>");
            resp.render('judgement');
      }

      else resp.send("<h1>sorry some error has occurred</h1>");
      })}
      else{
            resp.render('login',{message:"login is required to make tweet"})
      }

      // resp.send("<h1>tweet entered</h1>")
}