const express=require('express');
const router=express.Router();
const authorisation_checker=require('../controllers/auth')
const validator=require('../controllers/validator')
const loggedinvalidator=require('../controllers/validatorforoggeduser')
const tweetenter=require('../controllers/tweetenter')
// app.set('view engine','hbs')
//=== /auth/register :here actually it is similar to that
router.post('/register',authorisation_checker.checker)
// see we have to diifferent method in above and below code 
//so try to use per convience and to have clean and clear code

router.post('/login',validator.checker,(req,resp)=>{
      if(req.token){
            console.log("yes")
            resp.cookie('test',req.token,{
                  expires:new Date(Date.now()+1000*60*5),
                  httpOnly:true
            })
            resp.render('profile',req.user)
      }
      else{
            console.log("no")
            resp.render('login',{message:"token not get"})
      }
})
router.post('/tweet',loggedinvalidator.checker,tweetenter.registertweet);

//register here we have only written this  but not /auth/register becaz we have already passed that
const app=express();
const cookieparser=require('cookie-parser')

router.get('/profile',loggedinvalidator.checker,(req,resp)=>{
      console.log("=====req user====",req.user)

if(req.user){
      resp.render('profile',req.user)
}
else{
      resp.render('login',{message:"pls login first"})
}
})


router.get('/logout',(req,resp)=>{
      resp.cookie('test'," ",{
            expire:new Date(Date.now()+0),
            httpOnly:true
      })
      resp.render('index');
})
module.exports=router;














//    1)
//       exports.checker=(req,resp)=>{
//       console.log(req.body);
//       resp.send("form submitted");
//    }
      // module.exports.checker=(req,resp)=>{
      //       console.log(req.body);
      //       resp.send("form submitted");
      // }


// and:const authorisation_checker=require('../controllers/auth')
//=== /auth/register :here actually it is similar to that
// router.post('/register',authorisation_checker.checker)

// 2)   
//      checker=(req,resp)=>{
//       console.log(req.body);
//       resp.send("form submitted");
//      }
//       module.exports=checker

//       const    authorisation_checker=require('../controllers/auth')
//      router.post('/register',authorisation_checker)


// In the first approach, you are exporting an object with a property, allowing you to include multiple properties or methods in the export.

// In the second approach, you are directly assigning the function to module.exports, and only that function is exported. If you attempt to add more properties or methods to module.exports later in the module, they won't be included in the export.'


// about module.export and export 
// Recommendation:

// When you want to export a single value or a single object, it's generally recommended to use module.exports.
// If you want to add properties or methods to the exported object, you can use either module.exports or exports as long as you don't directly reassign exports.

// Note:
// It's common to see module.exports used when exporting a single value or object, and exports used when adding properties or methods to the exported object. However, keep in mind the potential pitfalls of directly reassigning exports if you are using it to add properties.


// 1)module.exports:

// module.exports is the actual object that is exported when the module is required in another file.
// If you reassign module.exports to a new object, it completely replaces what will be exported.

// 2)exports:

// exports is a shorthand reference to module.exports. Initially, both exports and module.exports point to the same object.
// However, if you directly assign a value to exports (e.g., exports = someValue;), it breaks the reference between exports and module.exports.