const express=require('express');
const router=express.Router();


router.get('/',async(req,resp)=>{
      resp.render('index')
      
      // you dont need to write index.hbs
})
router.get('/register',(req,resp)=>{
      resp.render('register');
})
router.get('/login',(req,resp)=>{
      resp.render('login');
})
router.get('/judgement',(req,resp)=>{

      resp.render('judgement');
})
router.get('/tweet',(req,resp)=>{
      const con=require('../mysql_connection')
      con.query("select * from tweet",(error,result)=>{
            if(!error){
                  resp.json(result)
                  // console.log(result);
                  // const tweetdata=result[0];
                  // const {writtenby,emailby,about,content,tag}=tweetdata;
            }
            else {
                  resp.json({error:"error"})
            }
      })
      
})


// router.post('/auth/register',(req,resp)=>{
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


module.exports=router;