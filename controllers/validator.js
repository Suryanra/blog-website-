const con=require('../mysql_connection')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const dotenv=require('dotenv');

dotenv.config({path:'../.env'})

const secretkey=process.env.secretkey;
exports.checker=(req,resp,next)=>{
      const {name,email,password1:usernputpassword}=req.body;
      console.log("===========================");
      if(!name || !email || !usernputpassword) {resp.render('login',{message:"fields are missing"})}
      else{
      con.query('select * from user where email =?',[email],async (error,result)=>{
            if(error) resp.render('login',{message:"some error occured"})
            if(!error && result.length==0) resp.render('login',{message:"user not found "})
            else{
                  user=result[0];
                  const {name:dbname,password:hashedpassword}=user
                  bcrypt.compare(usernputpassword,hashedpassword,(err,result)=>{
                        if(result){
                              //password correct
                              jwt.sign({user},secretkey,{expiresIn:'300s'},(err,token)=>{
                                    if(err){
                                          //error
                                          req.token=null;
                                          // resp.render('login',{message:"issue in server side to generate token "})
                                    }
                                    else{
                                          //token generated
                                          req.token=token;
                                          req.user=user;
                                          console.log(req.user)
                                          
                                    }
                                    next();
                              })
                        }
                        else{
                              //password incorrect
                              resp.render('login',{message:"password incorrect "})
                        }
                  })
            }
      })
      }
}

