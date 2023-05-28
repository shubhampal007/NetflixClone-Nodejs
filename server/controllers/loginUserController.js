const UserSchema=require('../model/UserSchema');
const mongoose=require('mongoose');



exports.login=async (req,res)=>{
   const inputEmail=req.body.email;
   const inputPassword=req.body.password;
   const loginUser=await UserSchema.find({email:inputEmail,password:inputPassword});
   if(loginUser.length===0)
   {
      res.status(200).send({ status:"SUCCESS",message:"User Not Found",loginFlag:false});
   }
   else{
      console.log(loginUser);
      res.send({ status:"SUCCESS",message:"User Found",loginFlag:false});

   }
  
// console.log('Login success');
}


exports.signUp=async (req,res)=>
{
 console.log(req.body);
 const newUser= new UserSchema({
    userId:req.body.userId,
    name:req.body.name,
    phoneNo:req.body.phoneNo,
    password:req.body.password,
    email:req.body.email,
    city:req.body.city,
    state:req.body.state,
    genere1:req.body.genere1,
    genere2:req.body.genere2,
    genere3:req.body.genere3,
    genere4:req.body.genere4,
    genere5:req.body.genere5
 });

 try{
    await UserSchema.create(newUser);
    console.log('NEW USER ADDED');
    res.status(201).send(newUser);
 }
 catch(error)
 {
   res.status(400).send(error);
  console.log(error);
 }
}