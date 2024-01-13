
const con=require('../mysql_connection')
// you can paste your sql connection in some other file instead of storing it in
// app.js and use it as per requiredment

const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs')//carefull:actual name is bcryptjs and not bcrypt
// ===== bcrypt js is used to just hashed the data password

exports.checker=(req,resp)=>{
      console.log(req.body);
      const { name,email,password1,password2}=req.body;
      // const data="amit@gmail.com"
      con.query('select email from user where email =?',[email],async (error,result)=>{
            if(!error){
                  console.log(result)
                  if(result.length>0)
                  {
                        console.log(result.length)        
                        return resp.render('register',{message:"Email already in use"})
                        //  note:during rendering we dont use resp.render('/register') 
                        // we actually use resp.render('register') while in case app.get('/register')  ==>this doen to check url
                        // app.get(path, callback): This method is used to define a route that handles
                        //  HTTP GET requests. It takes two parameters: the route path and a callback function that will be
                        //  executed when a GET request is made to that path. In your example:
                        // while:
                        // The resp.render('register') statement in both cases is used to render the 'register' view when the corresponding route is accessed.
                  }
                  else if(password1!==password2)
                  {
                        return resp.render('register',{message:"Password are not matching"})
                  }
                  let hashedpassword=await bcrypt.hash(password1,8)//usually 8 round encryption is very good 
                  // and it is bydefault
                  console.log(hashedpassword)
                  // con.query('insert into user SET =?',{name:name,email:email,password:hashedpassword},(error,result)=>{
                        // there is differenc between two syntax carfull while writing 
                  con.query('INSERT INTO user SET ?', { name: name, email: email, password: hashedpassword },(error,result)=>{
                        if(error)
                        {
                              console.log("error",error.message)
                        }
                        else
                        {
                        console.log(result)
                        return  resp.render('login',{message:"You are registered❤️,lets login"})      
                              }
                  })
            }
            else {
                  console.log("error",error.message)
            }
      });
      // resp.send("form submitted");
}

// module.exports=checker;