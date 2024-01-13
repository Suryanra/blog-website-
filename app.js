const express=require('express')
const mysql2=require('mysql2');
// const dotenv=require('dotenv');
// dotenv.config({path:'./.env'})
const path=require('path');
const { register } = require('module');
const app=express();


// const bodyParser = require('body-parser');




// app.engine('hbs', handlebars);
app.set('view engine','hbs')

// parse url encoded bodies (as sent by html formate)
app.use(express.urlencoded({ extended: true }));
// parse json  bodies (as sent by api client)
app.use(express.json())
const publicdirectory=path.join(__dirname,'./public')//public drectory is where you gone to put you file like any css or any js for fronted and also image thAT YOU MIGHT GOING TO USE
// we used dot/ slashes to indicath that we have public in same level of directory
// after you define where your public directory  ,you need to make sure that you express ,our server is actually usig these public directoey 
// for this we have right below line
app.use(express.static(publicdirectory))



// ./=>it indicate that our file in same directory level
// =========>we do not havve to store all the sensitive information here like usename host password therefore we will create of file called
// .env for our envronment variable that we want to protect


const query1=`insert  into   user (id,name,password,email) value (1,"surya","1221","surya@com") ;`
const query2=`select * from user`



const cookieparser=require('cookie-parser')
app.use(cookieparser())
app.get('/ongo',(req,resp)=>{
      
      resp.render("judgement");
})

// app.get('/',async(req,resp)=>{
//       // resp.send({
//       //       name1:"surya",
//       //       class:"btech"
//       // })
//       // con.query(query2,(err,result)=>{
//       //       if(err)
//       //       {
//       //             console.log("errror",err.message)
//       //       }
//       //       else 
//       //       {
//       //             console.log(result)
//       //             resp.send(result)
//       //       }
//       // })
//       const data={
//             name:"surya",
//             email:"surya@gmail.com"
//       }
//       name1="surya"
//       resp.render('index')
//       // you dont need to write index.hbs
// })
// app.get('/register',(req,resp)=>{
//       resp.render('register');
// })



// ========
// insted of defining all routes here // ass too many routes here become messy thereform we have created 
// routes folder to manage and organise that
// with file name pages.js
// now export there and import it here

// define router
app.use('/auth',require('./routes/auth'))//
app.use('/',require('./routes/pages'))//it means whenever you using / then it go
//to routes/pages and then there check whether routes present or not
// note:dont write pages.js
// app.use('/register',require('./routes/pages'))

// note we not going to use /auth/regiter
// then /auth/login
// but instead only /auth
// as we going to create it for register ,for login ,for log out




// app.post('/register',(req,resp)=>{
//       const {name,email,password1,password2}=req.body;
//       // console.log("==================");
//       // password2?console.log(password2):console.log("empty")
//       if(name&&email&&password1&&password2&&password1===password2)
//       {
//             console.log(req.body);
//             resp.send("form submitted");
//       }
//       else if( name&&email&&password1&&password2&&password1!=password2)
//             {console.log(req.body);
//             resp.send(400,"password are not matching");
//             }
//       else 
//       {console.log(req.body);
//       resp.send(400,"incorrect data");
//       }
// })




app.listen(5000,()=>{

      console.log("server started on 5000")
})
