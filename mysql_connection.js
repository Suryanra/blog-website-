const dotenv=require('dotenv')
dotenv.config({path:'./.env'})
const mysql2=require('mysql2')
const con=mysql2.createConnection({
      host:process.env.DATABASE_HOST,
      user:process.env.DATABASE_USER,
      password:process.env.DATABASE_PASSWORD,
      database:process.env.DATABASE
})
con.connect((err)=>{
      if(err){
            console.log("error",err.message);
      }
      else 
      {
            console.log("connected")
      }
})
module.exports=con;